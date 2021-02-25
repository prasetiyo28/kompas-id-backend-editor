const AuthRouter = require('./auth');
// const ViewRouter = require('./view');
const ArticleRouter = require('./article');
const notFound = require('./404').index;

module.exports = function (app) {
  app.use('/auth', AuthRouter);
  app.use('/articles', ArticleRouter);
  // app.use('/',ViewRouter)
  app.use(notFound);
};
