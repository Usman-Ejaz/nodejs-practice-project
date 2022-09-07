const router = require('express').Router();
const LoginController = require('./../controllers/auth/LoginController');

router.get('/', (req, res) => res.redirect('/auth/login'));

router.get('/login', LoginController.login);

module.exports = router;