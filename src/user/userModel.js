const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        unique: true,
    },
    email: {
        type: string,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type:string,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;