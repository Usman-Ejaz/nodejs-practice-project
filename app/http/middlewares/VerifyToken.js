const jwt = require('jsonwebtoken');
require('dotenv').config();
const { STATUS_BAD_REQUEST, MSG_BAD_REQUEST } = require('./../helpers/constants');

module.exports = {
    async verifyApiToken(req, res, next) {
        const token = req.headers['Authorization'].replace('Bearer ', '');

        try {
            const decode = jwt.verify(token, process.env.API_JWT_SECRET);
            const user = await findUserById(decode.id);         // Call this function from auth service.
            if (user) {
                req.user = user;
                next();
            } else {
                return res.status(STATUS_BAD_REQUEST).send({
                    message: MSG_BAD_REQUEST
                })
            }
        } catch (e) {
            return res.status(STATUS_BAD_REQUEST).send({
                message: MSG_BAD_REQUEST
            })
        }
    }
}