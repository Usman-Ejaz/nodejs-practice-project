const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    /**
     * 
     * This function creates the JWT Token
     * 
     * @return string (token)
     */
    createToken(data) {
        return jwt.sign(data, process.env.API_JWT_SECRET, { expiresIn: 60 * 60 });
    },

    /**
     *
     * 
     *  
     */
    verified(token) {
        try {
            const decode = jwt.verify(token, process.env.API_JWT_SECRET);
            return true;
        } catch (e) {
            return false;
        }
    }
}