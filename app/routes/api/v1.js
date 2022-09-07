const router = require('express').Router();
const LoginController = require('./../../controllers/api/v1/LoginController');
const RegisterController = require('./../../controllers/api/v1/RegisterController');
const {
    verifyApiToken
} = require('./../../middlewares/VerifyToken');

router.post('/login', verifyApiToken, LoginController.login);
router.post('/register', RegisterController.register);

module.exports = router;