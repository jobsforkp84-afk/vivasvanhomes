/**
 * Google Apps Script to store contact form submissions in Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Sign in with: jobsforkp84@gmail.com
 * 3. Click "New Project"
 * 4. Delete the default code and paste this entire file
 * 5. Save the project (name it "Vivasvan Homes Contact Form")
 * 6. Click "Deploy" > "New deployment"
 * 7. Select type: "Web app"
 * 8. Execute as: "Me (your email)"
 * 9. Who has access: "Anyone" (or "Anyone with Google account" if you prefer)
 * 10. Click "Deploy"
 * 11. Copy the Web App URL and update it in script.js (replace GOOGLE_SCRIPT_URL)
 * 
 * The script will automatically create a Google Sheet named "Vivasvan Homes Enquiries"
 * in your Google Drive if it doesn't exist.
 */

// Function to handle POST requests from the contact form
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const sheet = getOrCreateSpreadsheet();
    
    // Add headers if this is the first entry
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Property Type', 'Message']);
    }
    
    // Add the form data to the sheet
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.interest || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput('Vivasvan Homes Contact Form API is running!');
}

// Function to get or create the spreadsheet
function getOrCreateSpreadsheet() {
  const spreadsheetName = 'Vivasvan Homes Enquiries';
  
  try {
    // Try to find existing spreadsheet
    const files = DriveApp.getFilesByName(spreadsheetName);
    
    if (files.hasNext()) {
      // Spreadsheet exists, open it
      const file = files.next();
      return SpreadsheetApp.openById(file.getId()).getActiveSheet();
    } else {
      // Create new spreadsheet
      const newSpreadsheet = SpreadsheetApp.create(spreadsheetName);
      const sheet = newSpreadsheet.getActiveSheet();
      
      // Set column headers
      sheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Name', 'Phone', 'Email', 'Property Type', 'Message']]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#2563eb');
      headerRange.setFontColor('#ffffff');
      
      return sheet;
    }
  } catch (error) {
    throw new Error('Error accessing Google Sheets: ' + error.toString());
  }
}

