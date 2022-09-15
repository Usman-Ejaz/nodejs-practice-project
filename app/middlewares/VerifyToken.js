const jwt = require('jsonwebtoken');
const {
    STATUS_BAD_REQUEST,
    STATUS_MSG_BAD_REQUEST
} = require('./../constants/custom.constants');

require('dotenv').config();

function findUserById(id) {
    return {
        email: 'usman.ejaz@nxb.com.pk',
        name: 'Usman Ejaz',
        id: id
    }
}

module.exports = {
    async verifyApiToken(req, res, next) {
        try {
            const token = req.headers.authorization.replace('Bearer ', '');

            const decode = jwt.verify(token, process.env.API_JWT_SECRET);
            const user = await findUserById(decode.id); // Call this function from auth service or User Model.
            if (user) {
                req.user = user;
                next();
            } else {
                return res.status(STATUS_BAD_REQUEST).send({
                    message: STATUS_MSG_BAD_REQUEST
                })
            }
        } catch (e) {
            return res.status(STATUS_BAD_REQUEST).send({
                message: STATUS_MSG_BAD_REQUEST
            })
        }
    }
}