const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_DB_URL}`, {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    } else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});