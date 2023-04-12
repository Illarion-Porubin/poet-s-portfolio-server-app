const contentService = require('../service/content-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ContentController {
    async createContent(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидаци', errors.array()))
            }

            const data = {...req.body};
            const contentData = await contentService.registration(data);
         
            return res.json(contentData);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ContentController();