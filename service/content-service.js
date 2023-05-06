const ContentSchema = require('../models/content-model');
const ContentDto = require('../dtos/content-dto');
// const ApiError = require('../exceptions/api-error');

class ContentService {
    async create(value) {
        const content = await ContentSchema.create({ ...value });
        return {
            content
        }
    }

    async getAllContent() {
        const allContent = await ContentSchema.findOne();
        return {
            content: allContent
        }
    }

    async updateCont(data) {
        const {
            main_photo_id,
            main_email,
            main_title, main_btn,
            about_block_title_1,
            about_block_title_2,
            about_block_text_1,
            about_block_text_2,
            contact_title
        } = data;

        console.log(data)
        const content = await ContentSchema.findById(data._id);
        if (!content) {
            throw ApiError.BadRequest("Данные не найдены");
        }
        await content.updateOne(
            {
                main_photo_id,
                main_email,
                main_title,
                main_btn,
                about_block_title_1,
                about_block_title_2,
                about_block_text_1,
                about_block_text_2,
                contact_title
            })
    }
}

module.exports = new ContentService();