# Ekatma Manav Darshan Conference - Paper Submission System Guide

## 📋 Overview

Your conference website now includes a complete paper submission and management system. Authors can submit papers with all required details, and you can manage and export all submissions from the admin dashboard.

---

## 🎯 System Features

### For Authors:
- **Paper Submission Form** - Collect paper title, abstract, keywords, and research category
- **Author Management** - Add multiple authors with names, emails, and affiliations
- **Corresponding Author** - Designate which author should be contacted
- **Validation** - Automatic validation of all required fields
- **Confirmation** - Email-style confirmation after successful submission

### For Admin:
- **Dashboard** - View all submitted papers in one place
- **Statistics** - Track total submissions, authors, categories, and dates
- **Search & Filter** - Find papers by title or author name
- **Export Options** - Download data as CSV or JSON
- **Individual Review** - View complete details for each paper
- **Delete Option** - Remove unwanted or test submissions

---

## 🔗 Accessing the System

### Paper Submission Page
- **URL**: `https://yoursite.com/submit-paper`
- **Access**: Public - Anyone can submit papers
- **Form Fields**:
  - Paper Title (10-200 characters)
  - Abstract (100-500 characters)
  - Keywords (comma-separated)
  - Research Category (dropdown selection)
  - Author Details (name, email, affiliation)
  - Corresponding Author designation

### Admin Dashboard
- **URL**: `https://yoursite.com/admin/dashboard`
- **Features**:
  - View all submissions
  - Export as CSV or JSON
  - Search submissions
  - View individual paper details
  - Delete submissions if needed

---

## 📝 Paper Submission Process

### Step 1: Navigate to Submission Form
Authors visit `/submit-paper` from:
- "Submit Paper" button in hero section
- "Submit Your Paper" link in Call for Papers section
- Direct URL navigation

### Step 2: Fill in Paper Details
1. **Paper Title** - Enter the research paper title
2. **Abstract** - Write a 100-500 character abstract
3. **Keywords** - Add relevant keywords (comma-separated)
4. **Category** - Select from these options:
   - Philosophical Foundations
   - Purushartha Framework
   - Dharma-Centric Society
   - Economic Thought
   - Governance & Leadership
   - Technology & Consciousness
   - Education & Knowledge

### Step 3: Add Authors
1. **First Author** - Form starts with one author
2. **Add More** - Click "Add Author" button to add co-authors
3. **For Each Author**:
   - Full Name (required)
   - Email Address (required, valid email format)
   - Affiliation/Institution (required)
   - Mark as Corresponding Author (at least one required)

### Step 4: Submit
- Click "Submit Paper" button
- System validates all fields
- Success message appears on completion
- Confirmation shows submission ID

---

## 📊 Admin Dashboard Usage

### Access Dashboard
1. Navigate to `/admin/dashboard`
2. View statistics dashboard showing:
   - Total Submissions
   - Total Authors
   - Number of Categories
   - Date of Last Submission

### Search & Filter
- Use search box to find papers by:
  - Paper title (partial matches work)
  - Author name (partial matches work)
- Results update in real-time

### View Submission Details
1. Click on any paper in the list
2. Right panel shows complete details:
   - Full paper title
   - Research category
   - Complete abstract
   - All author details with affiliations
   - Submission timestamp

### Export Submissions

#### Export as CSV (Excel Compatible)
1. Click "Export CSV" button
2. File downloads automatically
3. Opens in Excel or any spreadsheet application
4. Contains columns:
   - Submission ID
   - Paper Title
   - Category
   - Authors (Names)
   - Authors (Emails)
   - Authors (Affiliations)
   - Abstract
   - Keywords
   - Submitted Date

#### Export as JSON
1. Click "Export JSON" button
2. File downloads with complete structured data
3. Useful for programmatic processing
4. Includes all submission details

### Delete Submissions
1. Click trash icon on any submission
2. Confirm deletion
3. Submission is permanently removed

---

## 💾 Data Management & Processing

### Local Storage
- Submissions are stored in: `data/submissions.json`
- This file is created automatically
- All data persists between sessions

### Exported CSV Format
```
Submission ID,Paper Title,Category,Authors (Names),Authors (Emails),Authors (Affiliations),Abstract,Keywords,Submitted Date
PAPER-1703001234,Understanding Dharma,Philosophical Foundations,John Doe; Jane Smith,john@uni.edu; jane@uni.edu,University A; University B,"Abstract text here...","Dharma, Ethics",2024-01-15T10:30:00.000Z
```

### Exported JSON Format
```json
[
  {
    "id": "PAPER-1703001234",
    "title": "Understanding Dharma",
    "abstract": "Abstract text...",
    "keywords": "Dharma, Ethics",
    "category": "Philosophical Foundations",
    "authors": [
      {
        "name": "John Doe",
        "affiliation": "University A",
        "email": "john@uni.edu",
        "isCorresponding": true
      }
    ],
    "submittedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

## 🚀 Google Drive Integration (Optional)

### Option 1: Manual Upload (Easiest)
1. Export CSV from admin dashboard
2. Open [Google Drive](https://drive.google.com)
3. Click "New" → "File upload" or upload the CSV
4. Right-click file → "Open with" → "Google Sheets"
5. Share link with your team

### Option 2: Google Drive API Integration (Advanced)
To automate uploads to Google Drive:

1. **Prerequisites**:
   - Google Cloud Project setup
   - Service Account credentials
   - Google Drive folder ID

2. **Installation**:
   ```bash
   npm install googleapis google-auth-library
   ```

3. **Add to server routes** (`server/routes/google-drive.ts`):
   ```typescript
   import { google } from "googleapis";
   
   const drive = google.drive({ version: "v3", auth });
   
   export const uploadToGoogleDrive = async (
     fileName: string,
     fileContent: string
   ) => {
     const fileMetadata = {
       name: fileName,
       parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
     };
     
     const media = {
       mimeType: "text/csv",
       body: fileContent,
     };
     
     const file = await drive.files.create({
       requestBody: fileMetadata,
       media: media,
     });
     
     return file.data;
   };
   ```

4. **Trigger upload after export**:
   - Add button in admin dashboard: "Upload to Google Drive"
   - Calls endpoint `/api/admin/submissions/upload-drive`

### Option 3: Zapier Automation (No Code)
1. Connect Zapier to your website
2. Trigger: New paper submission
3. Action: Add row to Google Sheets
4. Maps all submission data automatically

---

## 📧 Connecting Email Notifications (Optional)

Add email confirmations to authors:

1. **Install email library**:
   ```bash
   npm install nodemailer
   ```

2. **Setup in submission handler**:
   ```typescript
   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });
   
   // After successful submission
   await transporter.sendMail({
     to: submission.authors[0].email,
     subject: "Paper Submission Confirmed",
     html: `<p>Your paper "${submission.title}" has been received.</p>`,
   });
   ```

---

## 🔐 Security Notes

### Current Implementation
- No authentication required for submissions (open call)
- CSV/JSON exports available via API
- Submissions stored in local JSON file

### For Production
- Add authentication to admin dashboard
- Implement password protection for `/admin/*` routes
- Use environment variables for sensitive data
- Add rate limiting to prevent spam
- Backup submissions regularly

### Example Authentication
```typescript
// Add to middleware
app.use("/api/admin/*", (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});
```

---

## 📊 Data Analysis Ideas

After collecting submissions, you can:

1. **Category Analysis**
   - Count papers per category
   - Identify most popular topics

2. **Author Statistics**
   - Geographic distribution
   - Institution representation
   - Co-authorship networks

3. **Timeline Analysis**
   - Submission rate over time
   - Peak submission periods
   - Distribution by deadline approach

4. **Quality Assessment**
   - Abstract length distribution
   - Keyword analysis
   - Corresponding author tracking

---

## ❓ Troubleshooting

### Problem: Submissions not saving
- Check if `data/` directory exists
- Verify file write permissions
- Check browser console for errors

### Problem: CSV export shows weird characters
- Excel: File → Open → Select UTF-8 encoding
- Or use Google Sheets: File → Import → Select CSV

### Problem: Form shows validation errors
- All fields marked with * are required
- Email must contain @
- Abstract must be 100-500 characters
- At least one corresponding author required

### Problem: Admin dashboard shows no submissions
- Verify API endpoint is working: `/api/admin/submissions`
- Check browser network tab
- Ensure submissions were actually submitted

---

## 📞 Support

For technical questions:
1. Check submission logs in `data/submissions.json`
2. Review browser console (F12)
3. Check server logs
4. Contact: thebharatsworldview@gmail.com

---

## 🔄 Next Steps

### Immediate Actions
1. Test paper submission form
2. Test admin dashboard access
3. Export sample data as CSV/JSON
4. Share admin link with organizing committee

### Week 1-2
1. Begin accepting submissions
2. Monitor submission volume
3. Set up email notifications (optional)
4. Create backup of submissions

### Pre-Conference
1. Review all submissions
2. Conduct peer review
3. Generate final statistics
4. Prepare acceptance/rejection notices

---

## 📋 Checklist

- [ ] Paper submission form is live
- [ ] Admin dashboard is accessible
- [ ] Test submission created and verified
- [ ] CSV export tested
- [ ] JSON export tested
- [ ] Team members trained on dashboard
- [ ] Backup process implemented
- [ ] Email notifications configured (optional)
- [ ] Google Drive integration set up (optional)
- [ ] Security measures implemented

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Conference**: Ekatma Manav Darshan 2025
