const { Schema, model, default: mongoose } = require('mongoose');

const ContentSchema = new Schema({
    main_firstName: {type: String, default: ''},
    main_lastName: {type: String, default: ''},
    main_photo_id: {type: String, default: ''},
    main_email: {type: String, default: ''},
    main_phone: {type: String, default: ''},
    main_card: {type: String, default: ''},
    main_title: { type: String, default: ''},
    main_btn: { type: String, default: '' },
    about_block_title_1: { type: String, default: '' },
    about_block_text_1: { type: String, default: '' },
    about_block_title_2: { type: String, default: '' },
    about_block_text_2: { type: String, default: ''},
    contact_title: { type: String, default: '' },
})

module.exports = model('Contents', ContentSchema);