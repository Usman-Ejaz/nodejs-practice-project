const router = require('express').Router();
const DashboardController = require(`../http/controllers/admin/DashboardController`);

router.get('/', DashboardController.index);

module.exports = router;