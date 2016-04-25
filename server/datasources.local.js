var postgresURI = process.env.DATABASE_URL;

var config = {
  "db": {
    "name": "db",
    "connector": "loopback-connector-sqlite",
    "file_name": "./dev.sqlite3",
    "debug": false
  }
}

if (postgresURI) {
  config.db = {
    connector: "postgresql",
    url: postgresURI,
  };
}

module.exports = config;
