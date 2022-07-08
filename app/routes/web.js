const router = require('express').Router();
const IndexController = require(`./../http/controllers/IndexController`);

router.get('/', IndexController.index);

module.exports = router;