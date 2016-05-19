module.exports = function(Bot) {
  Bot.beforeRemote('create', function(context, user, next) {
    var req = context.req;

    req.body.data.relationships['end-user'] = req.body.data.relationships['end-user'] || {};

    req.body.data.relationships['end-user'].data = {
      id: req.accessToken.userId,
    };

    next();
  });
};
