const router = require('express').Router();
const IndexController = require(`./../controllers/IndexController`);

router.get('/', IndexController.index);

/**
 * 
 * 
 */
router.get('/users', IndexController.showAll);
router.post('/users/create', IndexController.store);
router.get('/users/show/:id', IndexController.show);
router.post('/users/:id', IndexController.update);
router.delete('/users/delete/:id', IndexController.delete);

router.get('/send-email', IndexController.sendEmail);

/**
 * 
 * 
 */
module.exports = router;