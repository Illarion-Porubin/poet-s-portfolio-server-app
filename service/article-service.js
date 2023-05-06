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

    async sort(str) {
        const sort = str === `less` ? -1 : 1;
        const articles = await ArticleSchema.find().sort({createdAt: sort})
        return { articles }
    }

    async getOne(id) {
        const article = await ArticleSchema.findById(id)
        return { article }
    }

    async updateOne(data) {
        const { title, text, id } = data;
        const article = await ArticleSchema.findById(id);
        if (!article) {
            return 'Не найдено'
        }
        updateArticle = await ArticleSchema.findById(id).updateOne({ title, text })
        return { updateArticle }
    }

    async deleteOne(data) {
        const article = await ArticleSchema.findById(data.id);
        if (!article) {
            return 'Не найдено'
        }
        return await ArticleSchema.deleteOne({ _id: data.id })
    }

    async search(value) {
        const article = await ArticleSchema.find({
            title: { $regex: value, $options: "i" },
        });
        if (!article) {
            return res.status(400).json("ошибка получения данных");
        }
        return (article)
    }
}

module.exports = new ArticleService();
