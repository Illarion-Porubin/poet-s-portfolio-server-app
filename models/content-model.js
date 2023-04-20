const { Schema, model, default: mongoose } = require('mongoose');

const ContentSchema = new Schema({
    main_title: { type: String, unique: true },
    main_btn: { type: String, unique: true },
    about_block_title_1: { type: String, unique: true },
    about_block_text_1: { type: String, unique: true },
    contact_title: { type: String, unique: true },
    about_block_title_2: { type: String, unique: true },
    about_block_text_2: { type: String, unique: true },
})

module.exports = model('Contents', ContentSchema);