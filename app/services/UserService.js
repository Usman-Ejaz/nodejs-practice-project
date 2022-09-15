const User = require('./../models/User');

module.exports = {

    /**
     * @params
     * 
     * @return boolean true|false
     */
    getAll: async() => {
        return await User.find({});
    },

    /**
     * @params { id }
     * 
     * @return boolean true|false
     */
    findById: async(id) => {
        return await User.findById(id);
    },

    /**
     * @params
     * 
     * @return boolean true|false
     */
    create: async(data) => {
        const user = User({
            name: data.name,
            email: data.email
        });

        try {
            await user.save();
            return user;
        } catch (error) {
            return error;
        }
    },

    /**
     * @params
     * 
     * @return boolean true|false
     */
    update: async(data, id) => {
        try {

            const user = await User.updateOne({
                _id: id
            }, {
                name: data.name,
                email: data.email
            });

            return user;
        } catch (e) {
            return e;
        }
    },

    /**
     * @params
     * 
     * @return boolean true|false
     */
    destroy: async(id) => {
        try {
            await User.deleteOne({
                _id: id
            });

            return true;
        } catch (e) {
            return false;
        }
    }
}