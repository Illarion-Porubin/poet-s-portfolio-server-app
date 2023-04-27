const { Schema, model, default: mongoose } = require('mongoose');

const ArticleSchema = new Schema({
    title: { type: String, unique: false, required: true },
    text: { type: String, unique: false, required: true },
},
    {
        timestamps: true,
    },
)

module.exports = model('Articles', ArticleSchema); 