const { Storage } = require("@google-cloud/storage");
const storage = require("../storage");

const bucketName = "san-pedro";

// This function takes in an objectName (file name inside the bucket) and an amount of time and when the time expires so does the signed url.
async function generateSignedUrl(bucketName, fileName) {
  const options = {
    version: "v4",
    action: "read",
    expires: Date.now() + 7 * 60 * 1000,
  };

  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  return url;
}

module.exports = generateSignedUrl;
