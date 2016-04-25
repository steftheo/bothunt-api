const server = require(`./server/server`);

const args = process.argv;
const migrateIndex = args.reduce((carry, curr, index) => {
  if (carry) {
    return carry;
  }

  if (curr.match(/migrate/)) {
    return index;
  }

  return carry;
}, null);

const modelNames = args.filter((curr, index) => {
  return index > migrateIndex;
});

const db = server.dataSources.pg;

function migrateModel(database, modelName) {
  return new Promise(function(resolve, reject) {
    database.automigrate(modelName, function(err) {
      if (err) {
        reject(err);
      }

      resolve();
    })
  });
}

Promise.all(modelNames.map(function(model) {
  return migrateModel(db, model);
}));
