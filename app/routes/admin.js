const router = require('express').Router();
const DashboardController = require(`./../controllers/admin/DashboardController`);

router.get('/', DashboardController.index);

module.exports = router;