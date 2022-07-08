const router = require('express').Router();
const LoginController = require('./../../http/controllers/api/v1/LoginController');
const { verifyApiToken } = require('./../../http/middlewares/VerifyToken');

router.post('/login', verifyApiToken, LoginController.login);

module.exports = router;