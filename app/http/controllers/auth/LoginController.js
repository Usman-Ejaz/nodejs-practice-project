
module.exports = {
    login(req, res) {
        res.render('auth/login', {title: 'Login', layout: 'standalone'})
    }
}
