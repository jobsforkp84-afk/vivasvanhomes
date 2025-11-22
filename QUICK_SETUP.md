# Quick Setup Guide - Google Script URL

## Quick Steps to Fix the Error

You're seeing this error because the Google Script URL needs to be configured. Follow these steps:

### Step 1: Create Google Apps Script (5 minutes)

1. Go to: **https://script.google.com**
2. Sign in with: **jobsforkp84@gmail.com**
3. Click **"New Project"** (or the "+" icon)
4. Delete the default code
5. Open `google-apps-script.js` from this project folder
6. Copy ALL the code from that file
7. Paste it into the Google Apps Script editor
8. Click **"Save"** (name it "Vivasvan Homes Contact Form")

### Step 2: Deploy as Web App (2 minutes)

1. Click **"Deploy"** button (top right)
2. Click **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**
5. Set these options:
   - **Execute as**: "Me (your email)"
   - **Who has access**: **"Anyone"** ⚠️ (Important!)
6. Click **"Deploy"**
7. Click **"Authorize access"** → Select account → **"Advanced"** → **"Go to [Project Name] (unsafe)"** → **"Allow"**

### Step 3: Copy the Web App URL

After deployment, you'll see a dialog with a URL like:
```
https://script.google.com/macros/s/AKfyc.../exec
```

**Copy this entire URL**

### Step 4: Update script.js

1. Open `script.js` in this project
2. Find line 62 that says:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied URL (keep the quotes):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```
4. Save the file

### Step 5: Test

1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your Google Drive for a spreadsheet named **"Vivasvan Homes Enquiries"**

## That's it! 🎉

Your contact form will now save all submissions to Google Drive automatically.

## Need Help?

- See `SETUP_INSTRUCTIONS.md` for detailed instructions
- Check that "Who has access" is set to **"Anyone"** (this is required!)
- Make sure you copied the FULL URL including `/exec` at the end

