const PoemSchema = require('../models/poem-model');
const ApiError = require('../exceptions/api-error');


class PoemService {
    async create(data) {
        const poem = await PoemSchema.create({ ...data })
        return { poem }
    }

    async getAll() {
        const poems = await PoemSchema.find()
        return { poems }
    }

    async getOne(id) {
        const poem = await PoemSchema.findById({ id })
        return { poem }
    }

    async updateOne(data) {
        const id = '64464ff76d0a17a576e6a1d2';
        const { title, text } = data;
        const poem = await PoemSchema.findById(id);
        if (!poem) {
            return 'Не найдено'
        }
        const updatePoem =  await PoemSchema.updateOne({ title, text })
        return { updatePoem }
    }

    async deleteOne(data) {
        const testId = '64464ff76d0a17a576e6a1d2';
        const poem = await PoemSchema.findById(testId);
        if(!poem) {
            return 'Не найдено'
        }
        return await PoemSchema.deleteOne({_id: testId})       
    }
}

module.exports = new PoemService();