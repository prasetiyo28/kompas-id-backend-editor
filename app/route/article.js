const router = require('express').Router();

const ArticleController = require('../controllers/ArticleController');
const AccessMidleware = require('../helpers/accessKey');
// const Validator = require('../helpers/validation');

router.get('/', AccessMidleware.checkAccess, ArticleController.getAllArticle);
router.post('/create', AccessMidleware.checkAccess, ArticleController.createArticle);
router.get('/:id', AccessMidleware.checkAccess, ArticleController.articleById);
router.put('/edit', AccessMidleware.checkAccess, ArticleController.updateArticle);
router.delete('/:id', AccessMidleware.checkAccess, ArticleController.deleteArticle);

module.exports = router;
