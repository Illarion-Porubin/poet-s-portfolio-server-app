const ContentSchema = require('../models/content-model');
const ContentDto = require('../dtos/content-dto');
// const ApiError = require('../exceptions/api-error');

class ContentService {
    async registration(data) {
        console.log(data, 'data')
        const content = await ContentSchema.create({ ...data });
        const contentDto = new ContentDto(content)

        return {
           content: contentDto
        }
    }
}

module.exports = new ContentService();