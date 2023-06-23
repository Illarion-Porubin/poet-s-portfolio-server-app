const {Schema, model, default: mongoose} = require('mongoose');

const UserSchema = new Schema({
    firstName: {type: String, unique: false, default: ''},
    lastName: {type: String, unique: false, default: ''},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    phone: {type: String, default: ''},
    card: {type: String, default: ''},
    photoId: {type: String, unique: true, default: ''},
    admin: {type: Boolean, default: false},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String, required: true},
})

module.exports = model('User', UserSchema);