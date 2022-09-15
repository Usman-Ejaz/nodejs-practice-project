module.exports = {
    index(req, res) {
        res.render('admin/posts/index', {
            layout: 'admin'
        })
    }
}