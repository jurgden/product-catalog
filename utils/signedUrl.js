const { Storage } = require("@google-cloud/storage");
const { storage } = require("../index");

const bucketName = "san-pedro";

// This function takes in an objectName (file name inside the bucket) and an amount of time and when the time expires so does the signed url.
async function generateSignedUrl(objectName, expirationMinutes = 7) {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + expirationMinutes);

  const [url] = await storage.bucket(bucketName).file(objectName).getSignedUrl({
    action: "read",
    express: expiration,
  });

  return url;
}

module.exports = generateSignedUrl;
