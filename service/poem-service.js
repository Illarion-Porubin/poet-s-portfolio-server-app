const PoemSchema = require('../models/poem-model');
const ApiError = require('../exceptions/api-error');


class PoemService {
    async create(data) {
        console.log(data)
        const poem = await PoemSchema.create({ ...data })
        return { poem }
    }

    async getAll() {
        return  await PoemSchema.find()
    }

    async getOne(id) {
        const poem = await PoemSchema.findById(id)
        return { poem }
    }

    async updateOne(data) {
        const { title, text, id } = data;
        const poem = await PoemSchema.findById(id);
        if (!poem) {
            return 'Не найдено'
        }
        poem = await PoemSchema.findById(id).updateOne({ title, text })
        return { poem }
    }

    async deleteOne(data) {
        const poem = await PoemSchema.findById(data.id);
        if (!poem) {
            return 'Не найдено'
        }
        return await PoemSchema.deleteOne({ _id: data.id })
    }

    async search(value) {
        const poem = await PoemSchema.find({
            title: { $regex: value, $options: "i" },
        });
        if (!poem) {
            return res.status(400).json("ошибка получения данных");
        }
        return (poem)
    }
}

module.exports = new PoemService();