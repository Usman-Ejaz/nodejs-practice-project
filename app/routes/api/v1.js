const router = require('express').Router();
const LoginController = require('./../../http/controllers/api/v1/LoginController');
const RegisterController = require('./../../http/controllers/api/v1/RegisterController');
const { verifyApiToken } = require('./../../http/middlewares/VerifyToken');

router.post('/login', verifyApiToken, LoginController.login);
router.post('/register', RegisterController.register);

module.exports = router;