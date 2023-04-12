const {Schema, model, default: mongoose} = require('mongoose');

const ArticleSchema = new Schema({
    title: {type: String, unique: false, required: true},
    text: {type: String, unique: false, required: true},
    time: {type: String, unique: true, required: true},
})

module.exports = model('Article', ArticleSchema);Article