const router = require('express').Router();
const { isLoggedIn } = require(`./../middlewares/Authenticated`);
const DashboardController = require(`./../controllers/admin/DashboardController`);
const PostsController = require(`./../controllers/admin/PostsController`);

router.get('/', isLoggedIn, DashboardController.index);

router.get('/posts', isLoggedIn, PostsController.index);

module.exports = router;