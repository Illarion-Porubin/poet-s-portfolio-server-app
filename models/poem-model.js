const {Schema, model, default: mongoose} = require('mongoose');

const PoemSchema = new Schema({
    title: {type: String, unique: false, required: true},
    text: {type: String, unique: false, required: true},
})

module.exports = model('Poem', PoemSchema);Article