module.exports = config = {};


if (process.env.TWITTER_KEY && process.env.TWITTER_SECRET) {
  config['twitter-login'] = {
    provider: "twitter",
    authScheme: "oauth",
    module: "passport-twitter",
    callbackURL: "/auth/twitter/callback",
    authPath: "/auth/twitter",
    callbackPath: "/auth/twitter/callback",
    successRedirect: "/auth/account",
    failureRedirect: "/login",
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    failureFlash: true
  };
}
