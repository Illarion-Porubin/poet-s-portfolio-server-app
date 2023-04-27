const Router = require('express').Router;
const userController = require('../controller/user-controller');
const contentController = require('../controller/content-controller');
const router = new Router(); 
const authMiddleware = require('../middlewares/auth-middleware');
const checkAuth = require("./checkAuth");
const poemController = require('../controller/poem-controller');
const articleController = require('../controller/article-controller');


router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activate);
router.get('/me', checkAuth.check, userController.getMe);
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

/////////////mainContent///////
router.get('/content', contentController.getContent);
router.put('/content', contentController.updateContent);
router.post('/content', contentController.createDescContent);

/////////////poem//////////////
router.get('/poems', poemController.getPoems);
router.get('/poem', poemController.getPoem);
router.put('/poem', poemController.updatePoem);
router.post('/poem', poemController.createPoem);
router.delete('/poem', poemController.deletePoem);

/////////////article///////////
router.get('/articles', articleController.getArticles);
router.get('/article', articleController.getArticle);
router.put('/article', articleController.updateArticle);
router.post('/article', articleController.createArticle);
router.delete('/article', articleController.deleteArticle);

//////////?????////////////
// router.put('/content', contentController.createContent);
// router.delete('/content', contentController.createContent);



module.exports = router;