const {
    createToken
} = require('./../../../helpers/jwtHelpers');

module.exports = {
    register(req, res) {
        return res.json({
            token: `Bearer ${createToken({id: 10})}`
        });
    }
}