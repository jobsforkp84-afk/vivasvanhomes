# Google Drive Integration Setup Instructions

This guide will help you set up Google Apps Script to store contact form submissions in Google Drive (as a Google Sheet).

## Step-by-Step Setup

### 1. Create Google Apps Script Project

1. Go to [https://script.google.com](https://script.google.com)
2. Sign in with your Google account: **jobsforkp84@gmail.com**
3. Click the **"New Project"** button (or the "+" icon)
4. You'll see a new project with some default code

### 2. Add the Script Code

1. Delete all the default code in the editor
2. Open the file `google-apps-script.js` from this project
3. Copy the entire contents of that file
4. Paste it into the Google Apps Script editor
5. Click **"Save"** (or press Ctrl+S / Cmd+S)
6. Name your project: **"Vivasvan Homes Contact Form"**

### 3. Deploy as Web App

1. Click the **"Deploy"** button in the top right
2. Select **"New deployment"**
3. Click the gear icon (⚙️) next to "Select type"
4. Choose **"Web app"**
5. Configure the deployment:
   - **Description**: "Vivasvan Homes Contact Form Handler" (optional)
   - **Execute as**: Select **"Me (your email address)"**
   - **Who has access**: Select **"Anyone"** (this allows your website to submit data)
6. Click **"Deploy"**
7. You may need to authorize the script:
   - Click **"Authorize access"**
   - Select your Google account
   - Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
   - Click **"Allow"**

### 4. Get the Web App URL

1. After deployment, you'll see a **"Web app"** dialog
2. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/AKfyc.../exec`)
3. **Important**: Keep this URL safe - you'll need it in the next step

### 5. Update Your Website

1. Open the file `script.js` in this project
2. Find the line that says:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your Web App URL (include the quotes)
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```
4. Save the file

### 6. Test the Setup

1. Open your website (`index.html`) in a browser
2. Go to the Contact section
3. Fill out the contact form with test data
4. Submit the form
5. Check your Google Drive for a new spreadsheet named **"Vivasvan Homes Enquiries"**
6. The spreadsheet should contain your test submission with columns:
   - Timestamp
   - Name
   - Phone
   - Email
   - Property Type
   - Message

## Accessing Your Enquiries

All form submissions will be automatically saved to a Google Sheet called **"Vivasvan Homes Enquiries"** in your Google Drive.

To access it:
1. Go to [https://drive.google.com](https://drive.google.com)
2. Sign in with **jobsforkp84@gmail.com**
3. Look for the spreadsheet **"Vivasvan Homes Enquiries"**
4. Open it to view all enquiries

## Troubleshooting

### Form submissions not appearing in Google Sheet?

1. **Check the URL**: Make sure the `GOOGLE_SCRIPT_URL` in `script.js` is correct and includes the full URL
2. **Check deployment settings**: Ensure "Who has access" is set to "Anyone"
3. **Check browser console**: Open browser developer tools (F12) and check for any errors
4. **Re-deploy**: Try creating a new deployment and updating the URL

### Getting authorization errors?

1. Make sure you're signed in with the correct Google account
2. Try re-authorizing the script in the Apps Script editor
3. Check that the script has permission to access Google Drive and Sheets

### Need to update the script?

1. Make changes in the Google Apps Script editor
2. Click **"Deploy"** → **"Manage deployments"**
3. Click the edit icon (pencil) next to your deployment
4. Click **"New version"**
5. Click **"Deploy"**
6. The URL will remain the same, so no need to update `script.js`

## Security Notes

- The Google Apps Script uses your Google account credentials automatically
- No passwords are stored in the website code
- The Web App URL is public, but only your script can write to your Google Sheet
- All data is stored securely in your Google Drive

## Support

If you encounter any issues, check:
- Google Apps Script execution logs (View → Executions in the Apps Script editor)
- Browser console for JavaScript errors
- Google Drive permissions

