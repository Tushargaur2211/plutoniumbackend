const mongoose = require('mongoose');
const validator = require('validator');

const authSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        enum: {
            values: ["Mr", "Mrs", "Miss"], 
            message: 'Please provide only Mr, Mrs, Miss'
        }   
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid userEmail or Email'],
    },
    password: {
        type: String,
        required: [true, 'User Password required']
    }
});

const AuthModel = mongoose.model('AuthModel', authSchema);

module.exports = AuthModel;




// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, 
// email: {mandatory, valid email, unique}, password: {mandatory} }