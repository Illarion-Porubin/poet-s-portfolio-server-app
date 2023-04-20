const ContentSchema = require('../models/content-model');
const ContentDto = require('../dtos/content-dto');
// const ApiError = require('../exceptions/api-error');

class ContentService {
    async createContent(value) {
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
        const id = '6441476cab029bc488b2daa7'
        const {
            main_title, main_btn,
            about_block_title_1,
            about_block_title_2,
            about_block_text_1,
            about_block_text_2,
            contact_title
        } = data;

        console.log(data)

        const content = await ContentSchema.findById(id);
        if (!content) {
            throw ApiError.BadRequest("Данные не найдены");
        }
        await content.updateOne(
            {
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