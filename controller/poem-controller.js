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
            const poems = await poemService.getAll();
            return (res.json(poems))
        } catch (error) {
            next()
        }
    }

    async getPoem(req, res, next) {
        try {
            const poem = await poemService.getOne(req.body.id);
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
            const poem = await poemService.deleteOne(req.body);
            return (res.json(poem))
        } catch (error) {
            next()
        }
    }
}

module.exports = new PoemController();