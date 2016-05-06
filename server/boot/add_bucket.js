var s3bucket = process.env.S3_BUCKET;

module.exports = function(app) {
  const container = app.dataSources.storage.models.container;

  if (s3bucket) {
    container.createContainer({
      name: s3bucket,
    }, function(err) {
    });
  } else {
    container.createContainer({
      name: `files`,
    }, function(err) {

    });
  }
};
