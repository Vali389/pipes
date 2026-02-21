# Google Sheets Integration Setup Guide

This guide will help you connect your contact form to Google Sheets so that all form submissions are automatically saved.

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/10LT3UvzbJpqoWKH5DiqKT-uoHMh7eE6nlZyinFf5hck/edit

2. Click on **Extensions** → **Apps Script**

3. Delete any existing code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the POST request
    var data = JSON.parse(e.postData.contents);
    
    // Get the last row number before appending
    var lastRow = sheet.getLastRow() + 1;
    
    // Prepare the row data
    // Order: Name, Email, Contact Number, Company Name, Message, Timestamp
    var rowData = [
      data.name || '',
      data.email || '',
      data.contactNumber || '',
      data.companyName || '',
      data.message || '',
      data.timestamp || ''
    ];
    
    // Use setValues instead of appendRow to have more control
    var range = sheet.getRange(lastRow, 1, 1, rowData.length);
    range.setValues([rowData]);
    
    // Fix: Set contact number cell format to text to prevent formula parse error
    // This prevents Google Sheets from interpreting "+91" as a formula
    var contactNumberCell = sheet.getRange(lastRow, 3); // Column 3 is contact number
    contactNumberCell.setNumberFormat('@'); // '@' means text format
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': lastRow }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 2: Deploy as Web App

1. Click on **Deploy** → **New deployment**

2. Click the gear icon ⚙️ next to **Select type** → Choose **Web app**

3. Configure the deployment:
   - **Description**: "Contact Form Integration" (or any name)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone** (important!)

4. Click **Deploy**

5. **Copy the Web App URL** - It will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

6. Click **Authorize access** and grant permissions

## Step 3: Update Your Contact Form

1. Open `src/pages/Contact.jsx`

2. Find this line (around line 160):
   ```javascript
   const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
   ```

3. Replace it with your actual Web App URL:
   ```javascript
   const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```

## Step 4: Test the Integration

1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

### Formula Parse Error for Contact Number?
**This is the fix!** The script now sets the contact number cell format to text (`@`), which prevents Google Sheets from interpreting "+91" or other numbers starting with "+" or "=" as formulas. Make sure you:
1. Copy the updated script code above
2. Paste it into your Apps Script editor
3. Click **Save** (Ctrl+S or Cmd+S)
4. Go to **Deploy** → **Manage deployments**
5. Click the pencil icon (edit) on your deployment
6. Click **Deploy** to create a new version with the fix

### Data not appearing in sheet?
- Make sure the Web App URL is correct
- Check that "Who has access" is set to **Anyone**
- Verify the script is deployed (not just saved)
- Check the Apps Script execution log for errors

### Permission errors?
- Make sure you clicked "Authorize access" when deploying
- Grant all requested permissions

### CORS errors?
- The code uses `mode: 'no-cors'` which should handle this
- If issues persist, check browser console for specific errors

## Data Format

The form sends data in this format:
- **Name**: User's full name
- **Email**: User's email address
- **Contact Number**: Country code + phone number (e.g., "+91 9876543210")
- **Message**: User's message
- **Company Name**: Optional company name
- **Timestamp**: Automatically added timestamp

## Security Notes

- The Web App URL will be visible in your code
- Anyone with the URL can submit data (but that's expected for a contact form)
- Consider adding rate limiting or validation in the Apps Script if needed

## Advanced: Add More Columns

If you want to save Company Name and Timestamp to separate columns:

1. Add columns to your Google Sheet: **Name | Email | Contact Number | Company Name | Message | Timestamp**

2. Update the script's `rowData` array:
```javascript
var rowData = [
  data.name || '',
  data.email || '',
  data.contactNumber || '',
  data.companyName || '',
  data.message || '',
  data.timestamp || ''
];
```

