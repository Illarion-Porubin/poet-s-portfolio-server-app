const ApiError = require('../exceptions/api-error');
const poemService = require('../service/poem-service');


class PoemController {
    async createPoem(req, res, next) {
        try {
            const poem = await poemService.create(req.body);
            return (res.json(poem))
        } catch (error) {
            next()
        }
    }

    async getPoems(req, res, next) {
        try {
            const poems = await poemService.getAll(req);
            return (res.json(poems))
        } catch (error) {
            next()
        }
    }

    async getPoem(req, res, next) {
        try {
            const poem = await poemService.getOne(req.params.id);
            return (res.json(poem))
        } catch (error) {
            next()
        }
    }

    async updatePoem(req, res, next) {
        try {
            const poem = await poemService.updateOne(req.body);
            return (res.json(poem))
        } catch (error) {
            next()
        }
    }

    async deletePoem(req, res, next) {
        try {
            const poem = await poemService.deleteOne(req.params);
            return (res.json(poem))
        } catch (error) {
            next()
        }
    }

    async searchPoem(req, res) {
        try {
            const poem = await poemService.search(req.params.value);
            if (!poem) {
                return res.status(400).json("ошибка получения данных");
            }
            return (res.json(poem))
        } catch (error) {
            return res.status(500).json(`Не удалось получить данные из БД`);
        }
    }

}

module.exports = new PoemController();