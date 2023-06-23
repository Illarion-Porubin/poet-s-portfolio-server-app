const UserSchema = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(firstName, lastName, email, password, phone, card) {
        const candidate = await UserSchema.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest('Пользователь уже существует')
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await UserSchema.create({ firstName, lastName, email, phone, card, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }

    }
    async activate(activationLink) {
        const user = await UserSchema.findOne({ activationLink })
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }

        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserSchema.findOne({ email });
        if (!user) {
            throw ApiError.BadRequest('Пользователь не найден')
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный логин или пароль')
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnatorizaedErorr();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnatorizaedErorr();
        }

        const user = await UserSchema.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async me(req, res) {
        try {
            const user = await UserSchema.findById(req.userId);
            if (!user) {
                return res.status(404).json({
                    message: `пользователь не найден`,
                });
            }
            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto });
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userDto
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(data) {
        const { email, firstName, lastName, id, photoId, phone, card } = data;
        const user = await UserSchema.findById(id);
        if (!user) {
            throw ApiError.BadRequest("Пользователь не найден");
        }
        await user.updateOne({ email, firstName, lastName, photoId, phone, card })
    }
}

module.exports = new UserService();