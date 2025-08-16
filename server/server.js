// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from Vite build output
app.use(express.static(path.join(__dirname, "dist/spa")));

// Example API route
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "pong";
  res.json({ message: ping });
});

// Fallback to index.html for SPA
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist/spa/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
