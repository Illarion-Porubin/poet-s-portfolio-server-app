const {Schema, model, default: mongoose} = require('mongoose');

const UserSchema = new Schema({
    firstName: {type: String, unique: false, required: true},
    lastName: {type: String, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String, required: true},
})

module.exports = model('User', UserSchema);