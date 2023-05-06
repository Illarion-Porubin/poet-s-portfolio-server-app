const Router = require('express').Router;
const userController = require('../controller/user-controller');
const contentController = require('../controller/content-controller');
const router = new Router(); 
const checkAuth = require("./checkAuth");
const poemController = require('../controller/poem-controller');
const articleController = require('../controller/article-controller');
const cloudinaryController = require('../controller/cloudinary-controller');
const authMiddleware = require('../middlewares/auth-middleware');

/////////////user///////
router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activate);
router.get('/me', checkAuth.check, userController.getMe);
router.put('/update', userController.update);
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

///////////////cloudinary/////////////
router.delete("/avatar/:id", cloudinaryController.delete)

/////////////mainContent///////
router.get('/content', contentController.getContent);
router.put('/content', contentController.updateContent);
router.post('/content', contentController.createContent);
///////////////nodemailer////////////////////
router.post('/message', contentController.sendMessage);


/////////////poem//////////////
router.get('/poems', poemController.getPoems);
router.get('/poem/:id', poemController.getPoem);
router.get("/search/poem/:value", poemController.searchPoem);
router.put('/poem', poemController.updatePoem);
router.post('/poem', poemController.createPoem);
router.delete('/poem/:id', poemController.deletePoem);

/////////////article///////////
router.get('/articles', articleController.getArticles);
router.get('/articles/:value', articleController.sortArticle);
router.get("/search/article/:value", articleController.searchArticle);
router.get('/article/:id', articleController.getArticle);
router.put('/article', articleController.updateArticle);
router.post('/article', articleController.createArticle);
router.delete('/article/:id', articleController.deleteArticle);



module.exports = router;