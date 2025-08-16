// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Example API route
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

// Serve client build
app.use(express.static(path.join(__dirname, "dist/client")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist/client/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
