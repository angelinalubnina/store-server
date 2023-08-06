import jwt from 'jsonwebtoken';
// import tokenModel from '../models/token';

class TokenService {
    // generateTokens(payload) {
    //     const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    //         expiresIn: '30d',
    //     });
    //     const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    //         expiresIn: '30d',
    //     });
    //     return {
    //         accessToken,
    //         refreshToken,
    //     };
    // }
    // async saveToken(userId, refreshToken) {
    //     //при таком подходе на одного пользователя в БД находится один токен и можно будет использовать только одно устройство, при входе с нового устройства токен перезатрется и со старого устройства вас выкинет - сохранять несколько токенов на пользователя и продумать механизм удаления протухших
    //     const tokenData = await tokenModel.findOne({ user: userId });
    //     if (tokenData) {
    //         tokenData.refreshToken = refreshToken;
    //         return tokenData.save();
    //     }
    //     const token = await tokenModel.create({ user: userId, refreshToken });
    //     return token;
    // }
    // async removeToken(refreshToken) {
    //     const tokenData = await tokenModel.deleteOne({ refreshToken });
    //     return tokenData;
    // }
    validateAccessToken(token : string) {
        try {
            // const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            const userData = jwt.verify(token, "random_secret_12345");
            return userData;
        } catch (e) {
            return null;
        }
    }
    validateRefreshToken(token : string) {
        try {
            // const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            const userData = jwt.verify(token, "random_secret_54321");
            return userData;
        } catch (e) {
            return null;
        }
    }
    // async findToken(refreshToken) {
    //     const tokenData = await tokenModel.findOne({ refreshToken });
    //     return tokenData;
    // }
}

export default new TokenService();
