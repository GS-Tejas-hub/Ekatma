import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handlePaperSubmission,
  handleGetSubmissions,
  handleExportCSV,
  handleExportJSON,
  handleDeleteSubmission,
} from "./routes/paper-submission";
import {
  handleUploadCSVToGoogleDrive,
  handleUploadJSONToGoogleDrive,
  handleListGoogleDriveFiles,
  handleDeleteGoogleDriveFile,
  handleShareGoogleDriveFile,
} from "./routes/google-drive";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Paper submission routes
  app.post("/api/submit-paper", handlePaperSubmission);
  app.get("/api/admin/submissions", handleGetSubmissions);
  app.get("/api/admin/submissions/export/csv", handleExportCSV);
  app.get("/api/admin/submissions/export/json", handleExportJSON);
  app.delete("/api/admin/submissions/:id", handleDeleteSubmission);

  // Google Drive routes
  app.post("/api/admin/google-drive/upload-csv", handleUploadCSVToGoogleDrive);
  app.post(
    "/api/admin/google-drive/upload-json",
    handleUploadJSONToGoogleDrive
  );
  app.get("/api/admin/google-drive/files", handleListGoogleDriveFiles);
  app.delete("/api/admin/google-drive/files/:fileId", handleDeleteGoogleDriveFile);
  app.post(
    "/api/admin/google-drive/share/:fileId",
    handleShareGoogleDriveFile
  );

  return app;
}
