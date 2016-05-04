module.exports = function(Post) {
  Post.beforeRemote(`create`, (context, user, callback) => {
    // Get the request from the server context
    const request = context.req;
    debugger;

    // Get current user id
    const userId = request.accessToken.userId;

    request.body.data.relationships = request.body.data.relationships || {
      user: {},
    };

    // Set relationship data for user
    request.body.data.relationships.user.data = {
      id: userId,
    };

    // Continue creating the recipe
    callback();
  });
};
