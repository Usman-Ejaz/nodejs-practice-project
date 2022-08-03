const {
    MSG_SUCCESS,
    STATUS_SUCCESS
} = require('./../constants');


module.exports = {

    /**
     * 
     * @param res
     * @param data 
     * @param code 
     * @returns 
     */
    success: (res, data, code) => {

        return res.status(STATUS_SUCCESS).json({
            message: MSG_SUCCESS,
            data: data,
            statusCode: code
        });
    },

    /**
     * 
     * @param res
     * @param data 
     * @param code 
     * @returns 
     */
    error: (res, data, code) => {

        return res.status(STATUS_SUCCESS).json({
            message: MSG_SUCCESS,
            data: data,
            statusCode: code
        });
    }
}