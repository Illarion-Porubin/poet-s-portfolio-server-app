const contentService = require('../service/content-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ContentController {
    async createDescContent(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидаци', errors.array()))
            }

            const data = { ...req.body };
            const contentData = await contentService.createContent(data);

            return res.json(contentData);
        } catch (e) {
            next(e)
        }
    }

    async getContent(req, res, next) {
        try {
            const content = await contentService.getAllContent()
            return res.json(content)
        } catch (e) {
            next(e)
        }
    }

    async updateContent(req, res, next) {
        try {
            const content = await contentService.updateCont(req.body)
            return res.json(content)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ContentController();