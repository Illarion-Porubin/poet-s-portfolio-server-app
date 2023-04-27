const ArticleSchema = require('../models/article-model');


class ArticleService {
    async create(data) {
        const article = await ArticleSchema.create({ ...data })
        return { article }
    }

    async getAll() {
        const articles = await ArticleSchema.find()
        return { articles }
    }

    async getOne(id) {
        const article = await ArticleSchema.findById({ id })
        return { article }
    }

    async updateOne(data) {
        const id = '64464ff76d0a17a576e6a1d2';
        const { title, text } = data;
        const article = await ArticleSchema.findById(id);
        if (!article) {
            return 'Не найдено'
        }
        const updateArticle = await ArticleSchema.updateOne({ title, text })
        return { updateArticle }
    }

    async deleteOne(data) {
        const testId = '64464ff76d0a17a576e6a1d2';
        const article = await ArticleSchema.findById(testId);
        if (!article) {
            return 'Не найдено'
        }
        return await ArticleSchema.deleteOne({ _id: testId })
    }
}

module.exports = new ArticleService();
