const Router = require('express').Router;
const userController = require('../controller/user-controller');
const contentController = require('../controller/content-controller');
const router = new Router(); 
const authMiddleware = require('../middlewares/auth-middleware');
const checkAuth = require("./checkAuth")



router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/me', checkAuth.check, userController.getMe);

//////////////content///////////////

router.post('/content', contentController.createDescContent);
router.get('/content', contentController.getContent);
router.put('/content', contentController.updateContent);


// router.post('/poem', contentController.createContent);
// router.post('/article', contentController.createContent);
// router.put('/content', contentController.createContent);
// router.put('/poem', contentController.createContent);
// router.put('/article', contentController.createContent);
// router.delete('/content', contentController.createContent);
// router.delete('/poem', contentController.createContent);
// router.delete('/article', contentController.createContent);



module.exports = router;