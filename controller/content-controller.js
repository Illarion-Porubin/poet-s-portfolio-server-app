const contentService = require('../service/content-service');
const mailService = require('./../service/mail-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ContentController {
    async createContent(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидаци', errors.array()))
            }

            const data = { ...req.body };
            const contentData = await contentService.create(data);

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

    async sendMessage(req, res, next) {
        try {
            const content = await mailService.send(req.body)
            return res.json(content)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ContentController();