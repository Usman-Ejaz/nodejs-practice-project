const { winStorage } = require(`./../helpers/global`);
const { STATUS_BAD_REQUEST, STATUS_MSG_BAD_REQUEST } = require(`./../constants/custom.constants`);

module.exports = {
    async isLoggedIn(req, res, next) {
        try {
            let credentials = winStorage.getItem('credentials');
            console.log(credentials);
            debugger;
            credentials = credentials && JSON.parse(credentials);

            if (credentials.isAdmin) {
                next();
            } else {
                return res.status(STATUS_BAD_REQUEST).send({
                    message: STATUS_MSG_BAD_REQUEST
                });
            }
        } catch (e) {
            return res.status(STATUS_BAD_REQUEST).send({
                message: STATUS_MSG_BAD_REQUEST
            });
        }
    }
}