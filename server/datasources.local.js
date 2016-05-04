var postgresURI = process.env.DATABASE_URL;
var s3key = process.env.S3_KEY;
var s3id = process.env.S3_ID;

var config = {
  "db": {
    "name": "db",
    "connector": "loopback-connector-sqlite",
    "file_name": "./dev.sqlite3",
    "debug": false
  },
  "storage": {
    "name": "storage",
    "connector": "loopback-component-storage",
    "provider": "filesystem",
    "root": "./storage"
  }
}

if (postgresURI) {
  config.db = {
    connector: "postgresql",
    url: postgresURI,
  };
}

if (s3key && s3id) {
  config.storage = {
    "name": "storage",
    "connector": "loopback-component-storage",
    provider: 'amazon',
    key: s3key,
    keyId: s3id,
  };
}

module.exports = config;
