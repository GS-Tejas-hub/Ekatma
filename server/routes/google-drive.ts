import { RequestHandler } from "express";
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

// Initialize Google Drive API
const getGoogleDriveAuth = () => {
  const credentialsPath = process.env.GOOGLE_CREDENTIALS_PATH;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!credentialsPath || !folderId) {
    throw new Error(
      "Missing Google Drive configuration. Please set GOOGLE_CREDENTIALS_PATH and GOOGLE_DRIVE_FOLDER_ID"
    );
  }

  if (!fs.existsSync(credentialsPath)) {
    throw new Error(`Google credentials file not found at ${credentialsPath}`);
  }

  const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  return { auth, folderId };
};

// Upload CSV to Google Drive
export const handleUploadCSVToGoogleDrive: RequestHandler = async (
  req,
  res
) => {
  try {
    const { csvContent } = req.body;

    if (!csvContent) {
      res.status(400).json({ error: "CSV content is required" });
      return;
    }

    const { auth, folderId } = getGoogleDriveAuth();
    const drive = google.drive({ version: "v3", auth });

    // Create file metadata
    const fileName = `paper-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    const fileMetadata = {
      name: fileName,
      parents: [folderId],
      mimeType: "text/csv",
    };

    // Create readable stream from string
    const stream = Readable.from([csvContent]);

    const media = {
      mimeType: "text/csv",
      body: stream,
    };

    // Upload file
    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id, webViewLink, name",
    });

    res.json({
      success: true,
      message: "File uploaded to Google Drive successfully",
      file: {
        id: file.data.id,
        name: file.data.name,
        link: file.data.webViewLink,
      },
    });
  } catch (error) {
    console.error("Google Drive upload error:", error);
    res.status(500).json({
      error: "Failed to upload to Google Drive",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Upload JSON to Google Drive
export const handleUploadJSONToGoogleDrive: RequestHandler = async (
  req,
  res
) => {
  try {
    const { jsonContent } = req.body;

    if (!jsonContent) {
      res.status(400).json({ error: "JSON content is required" });
      return;
    }

    const { auth, folderId } = getGoogleDriveAuth();
    const drive = google.drive({ version: "v3", auth });

    // Create file metadata
    const fileName = `paper-submissions-${new Date().toISOString().split("T")[0]}.json`;
    const fileMetadata = {
      name: fileName,
      parents: [folderId],
      mimeType: "application/json",
    };

    // Create readable stream from string
    const stream = Readable.from([jsonContent]);

    const media = {
      mimeType: "application/json",
      body: stream,
    };

    // Upload file
    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id, webViewLink, name",
    });

    res.json({
      success: true,
      message: "JSON file uploaded to Google Drive successfully",
      file: {
        id: file.data.id,
        name: file.data.name,
        link: file.data.webViewLink,
      },
    });
  } catch (error) {
    console.error("Google Drive upload error:", error);
    res.status(500).json({
      error: "Failed to upload to Google Drive",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// List files in Google Drive folder
export const handleListGoogleDriveFiles: RequestHandler = async (req, res) => {
  try {
    const { auth, folderId } = getGoogleDriveAuth();
    const drive = google.drive({ version: "v3", auth });

    const files = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      spaces: "drive",
      fields: "files(id, name, createdTime, webViewLink, size)",
      pageSize: 50,
    });

    res.json({
      success: true,
      files: files.data.files || [],
    });
  } catch (error) {
    console.error("Google Drive list error:", error);
    res.status(500).json({
      error: "Failed to list files from Google Drive",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Delete file from Google Drive
export const handleDeleteGoogleDriveFile: RequestHandler = async (
  req,
  res
) => {
  try {
    const { fileId } = req.params;

    if (!fileId) {
      res.status(400).json({ error: "File ID is required" });
      return;
    }

    const { auth } = getGoogleDriveAuth();
    const drive = google.drive({ version: "v3", auth });

    await drive.files.delete({
      fileId: fileId,
    });

    res.json({
      success: true,
      message: "File deleted from Google Drive",
    });
  } catch (error) {
    console.error("Google Drive delete error:", error);
    res.status(500).json({
      error: "Failed to delete file from Google Drive",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Generate shareable link
export const handleShareGoogleDriveFile: RequestHandler = async (
  req,
  res
) => {
  try {
    const { fileId } = req.params;

    if (!fileId) {
      res.status(400).json({ error: "File ID is required" });
      return;
    }

    const { auth } = getGoogleDriveAuth();
    const drive = google.drive({ version: "v3", auth });

    // Make file accessible to anyone with link
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Get shareable link
    const file = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink",
    });

    res.json({
      success: true,
      message: "File link shared successfully",
      link: file.data.webViewLink,
    });
  } catch (error) {
    console.error("Google Drive share error:", error);
    res.status(500).json({
      error: "Failed to share file",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
