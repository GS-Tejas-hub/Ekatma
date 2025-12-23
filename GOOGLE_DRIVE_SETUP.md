# Google Drive Auto-Upload Setup Guide

Complete instructions to set up automatic Google Drive uploads for your conference submissions.

---

## 📋 Overview

This guide will help you:
1. Create Google Cloud Project
2. Get Google Drive API credentials
3. Configure your application
4. Test the integration
5. Use the upload feature

---

## 🚀 Step 1: Create a Google Cloud Project

### 1.1 Go to Google Cloud Console
- Visit [Google Cloud Console](https://console.cloud.google.com)
- Sign in with your Google account
- Accept the terms if prompted

### 1.2 Create a New Project
1. Click the project dropdown at the top
2. Click "NEW PROJECT"
3. Enter project name: `Conference Submissions`
4. Click "CREATE"
5. Wait for the project to be created (2-3 minutes)

### 1.3 Enable Google Drive API
1. In the search bar, type "Google Drive API"
2. Click on "Google Drive API" from results
3. Click "ENABLE"
4. You should see: "Google Drive API is now enabled"

---

## 🔑 Step 2: Create Service Account Credentials

### 2.1 Create Service Account
1. Click the menu icon (≡) in top-left
2. Go to "APIs & Services" → "Credentials"
3. Click "CREATE CREDENTIALS" button
4. Select "Service Account"
5. Fill in the form:
   - **Service account name**: `conference-submissions`
   - **Service account ID**: (auto-filled)
   - **Description**: `Service account for uploading conference papers to Google Drive`
6. Click "CREATE AND CONTINUE"

### 2.2 Grant Permissions
1. Skip the grant roles step (click CONTINUE)
2. Click "CREATE KEY"
3. Choose "JSON" format
4. Click "CREATE"
5. **Important**: A JSON file will download automatically
   - Save it safely: `google-credentials.json`
   - DO NOT share or commit this file to git!

---

## 📁 Step 3: Set Up Google Drive Folder

### 3.1 Create Folder
1. Open [Google Drive](https://drive.google.com)
2. Right-click in empty space
3. Select "New" → "Folder"
4. Name it: `Conference Submissions Data`
5. Click "CREATE"

### 3.2 Share Folder with Service Account
1. Open the folder you just created
2. Click "Share" button (top-right)
3. In the JSON file you downloaded, find the email:
   ```json
   "client_email": "conference-submissions@YOUR-PROJECT.iam.gserviceaccount.com"
   ```
4. Copy that email address
5. Paste it in the Google Drive share dialog
6. Give it "Editor" permission
7. Click "Share"

### 3.3 Get Folder ID
1. Open the folder in Google Drive
2. Look at the URL:
   ```
   https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ123
   ```
3. Copy the folder ID (the long string after `/folders/`)
4. Save it for the next step

---

## ⚙️ Step 4: Install Dependencies

```bash
npm install googleapis google-auth-library
```

This adds Google API libraries to your project.

---

## 🔐 Step 5: Configure Environment Variables

### 5.1 Create `.env` file
In your project root, create or update `.env` file with:

```env
GOOGLE_CREDENTIALS_PATH=./google-credentials.json
GOOGLE_DRIVE_FOLDER_ID=YOUR_FOLDER_ID_HERE
```

### 5.2 Add Credentials File
1. Place your downloaded `google-credentials.json` in project root
2. Example structure:
   ```
   project-root/
   ├── google-credentials.json  ← Place here
   ├── .env                     ← Add env vars here
   ├── client/
   ├── server/
   └── ...
   ```

### 5.3 Update .gitignore
Make sure your `.gitignore` includes:
```
google-credentials.json
.env
.env.local
```

**Important**: Never commit credentials to git!

---

## ✅ Step 6: Verify Setup

### 6.1 Check Endpoints
The following API endpoints should be available:

```
POST   /api/admin/google-drive/upload-csv      → Upload CSV file
POST   /api/admin/google-drive/upload-json     → Upload JSON file
GET    /api/admin/google-drive/files           → List files in folder
DELETE /api/admin/google-drive/files/:fileId   → Delete a file
POST   /api/admin/google-drive/share/:fileId   → Make file public
```

### 6.2 Test the Setup
1. Go to Admin Dashboard: `/admin/dashboard`
2. You should see two new buttons:
   - "Upload CSV to Drive"
   - "Upload JSON to Drive"
3. Submit a test paper first
4. Click "Upload CSV to Drive"
5. Wait for success message

---

## 📊 Using Google Drive Uploads

### In the Admin Dashboard

#### Button Locations
```
[Search box] [Export CSV] [Export JSON] [Upload CSV to Drive] [Upload JSON to Drive]
```

#### How to Upload
1. **Submit Papers First**
   - Authors submit papers using `/submit-paper` form
   - Papers are stored locally in `data/submissions.json`

2. **Upload to Google Drive**
   - Go to `/admin/dashboard`
   - Review submissions if needed
   - Click "Upload CSV to Drive" or "Upload JSON to Drive"
   - Wait for success message

3. **File Created**
   - Files appear in your Google Drive folder
   - Named like: `paper-submissions-2024-01-15.csv`
   - Automatically dated with current date

4. **Access from Drive**
   - Go to your Google Drive folder
   - Files are ready to download or share
   - Open CSV in Google Sheets or Excel
   - View JSON in any text editor

---

## 🔒 Security Best Practices

### Credentials File
```bash
# Add to .gitignore (DO NOT COMMIT)
google-credentials.json
.env
.env*.local
```

### Access Control
- Only share Google Drive folder with your team
- Use "Viewer" role if people only need to read
- Use "Editor" role if they need to manage files

### Limiting Permissions
The service account credentials only have access to:
- Upload files to the specified folder
- List files in the folder
- Delete files from the folder
- Make files shareable

It does NOT have access to:
- Other folders or files
- Modifying conference data
- Accessing your personal files

---

## 🐛 Troubleshooting

### Problem: "Google credentials file not found"
**Solution**:
- Ensure `google-credentials.json` is in project root
- Check `GOOGLE_CREDENTIALS_PATH` in `.env`
- Verify file path is correct

### Problem: "Missing Google Drive configuration"
**Solution**:
- Make sure `.env` file exists
- Check both variables are set:
  - `GOOGLE_CREDENTIALS_PATH`
  - `GOOGLE_DRIVE_FOLDER_ID`
- Restart dev server after changing `.env`

### Problem: "Permission denied" error
**Solution**:
- Verify service account email is shared with Drive folder
- Check service account has "Editor" role
- Make sure folder ID is correct
- Regenerate credentials if needed

### Problem: Upload button shows "Failed to upload"
**Solution**:
- Check browser console for error details (F12)
- Verify API is enabled in Google Cloud
- Confirm service account has Drive API enabled
- Check internet connection
- Try uploading JSON instead of CSV

### Problem: "Invalid service account JSON"
**Solution**:
- Download fresh credentials from Google Cloud
- Ensure file wasn't modified
- Check file isn't corrupted
- Paste entire JSON without modifications

---

## 🎯 Workflow Example

### Day 1: Setup
1. ✅ Create Google Cloud Project
2. ✅ Enable Drive API
3. ✅ Create Service Account
4. ✅ Create Drive Folder
5. ✅ Install npm packages
6. ✅ Add credentials to project
7. ✅ Configure `.env` variables

### Day 2-30: Collect Submissions
1. ✅ Authors submit papers to `/submit-paper`
2. ✅ Papers appear in Admin Dashboard
3. ✅ Monitor submissions daily

### When Ready to Export
1. ✅ Go to Admin Dashboard
2. ✅ Click "Upload CSV to Drive"
3. ✅ Access file in Google Drive
4. ✅ Share with review committee
5. ✅ Team works on shared spreadsheet

---

## 📈 Advanced Options

### Option 1: Auto-Upload After Each Submission
```typescript
// In server/routes/paper-submission.ts
// After successful submission, automatically upload

// Add this after saveSubmissions:
const allSubmissions = getSubmissions();
const csvContent = generateCSVFromSubmissions(allSubmissions);
await uploadToGoogleDrive(csvContent);
```

### Option 2: Scheduled Daily Backups
```typescript
// In server/index.ts
// Upload all submissions every day at midnight

import cron from "node-cron";

// Run every day at midnight
cron.schedule("0 0 * * *", async () => {
  const submissions = getSubmissions();
  const csv = generateCSV(submissions);
  await uploadToGoogleDrive(csv);
  console.log("Daily backup uploaded to Google Drive");
});
```

### Option 3: Integration with Google Forms
- Create Google Form for submissions (alternative to web form)
- Responses automatically go to Google Sheets
- Use this guide to also upload custom data

---

## 📞 Support

If you encounter issues:

1. **Check Error Messages**
   - Browser console (F12)
   - Server logs
   - `.env` file configuration

2. **Verify Setup**
   - Google Cloud Project exists
   - Drive API is enabled
   - Service account created
   - Credentials JSON valid
   - Folder ID correct
   - `.env` variables set

3. **Common Solutions**
   - Restart dev server after changing `.env`
   - Refresh browser after code changes
   - Clear browser cache
   - Check internet connection

4. **Get Help**
   - Check GOOGLE_DRIVE_SETUP.md (this file)
   - Review error messages carefully
   - Check Google Cloud documentation
   - Contact: thebharatsworldview@gmail.com

---

## 📚 Reference

### Environment Variables
```env
GOOGLE_CREDENTIALS_PATH     Path to google-credentials.json file
GOOGLE_DRIVE_FOLDER_ID      Folder ID from Google Drive URL
```

### API Endpoints
```
POST   /api/admin/google-drive/upload-csv
POST   /api/admin/google-drive/upload-json
GET    /api/admin/google-drive/files
DELETE /api/admin/google-drive/files/:fileId
POST   /api/admin/google-drive/share/:fileId
```

### File Naming Convention
```
paper-submissions-YYYY-MM-DD.csv
paper-submissions-YYYY-MM-DD.json
```

### Supported Formats
- **CSV** - For Excel/Sheets
- **JSON** - For programmatic processing

---

**Setup Complete!** 🎉

You now have automatic Google Drive uploads configured. Start uploading your conference submissions!

For questions or issues, refer to the Troubleshooting section or contact support.

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Conference**: Ekatma Manav Darshan 2025
