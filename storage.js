// storage.js
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const path = require("path");

// Read in the Google Cloud JSON Credentials
const filePath = path.join(process.env.HOME, "secrets", "topsecret.json");

let jCreds;

try {
  jCreds = fs.readFileSync(filePath, "utf8");
} catch (err) {
  console.error("Error reading the JSON credentials file:", err);
  process.exit(1);
}

const storage = new Storage({
  credentials: JSON.parse(jCreds),
});

module.exports = storage;
