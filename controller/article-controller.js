const ApiError = require('../exceptions/api-error');
const articleService = require('../service/article-service');


class ArticleController {
    async createArticle(req, res, next) {
        try {
            const content = await articleService.create(req.body);
            return res.json(content)
        } catch (error) {
            next()
        }
    }

    async getArticles(req, res, next) {
        try {
            const articles = await articleService.getAll();
            return (res.json(articles))
        } catch (error) {
            next()
        }
    }

    async sortArticle(req, res, next) {
        try {
            const articles = await articleService.sort(req.params.value);
            return (res.json(articles))
        } catch (error) {
            next()
        }
    }

    async getArticle(req, res, next) {
        try {
            const article = await articleService.getOne(req.params.id);
            return (res.json(article))
        } catch (error) {
            next()
        }
    }

    async updateArticle(req, res, next) {
        try {
            const article = await articleService.updateOne(req.body);
            return (res.json(article))
        } catch (error) {
            next()
        }
    }

    async deleteArticle(req, res, next) {
        try {
            const article = await articleService.deleteOne(req.params);
            return (res.json(article))
        } catch (error) {
            next()
        }
    }

    async searchArticle(req, res) {
        try {
            const article = await articleService.search(req.params.value);
            if (!article) {
                return res.status(400).json("ошибка получения данных");
            }
            return (res.json(article))
        } catch (error) {
            return res.status(500).json(`Не удалось получить данные из БД`);
        }
    }
}

module.exports = new ArticleController();