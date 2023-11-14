import jwt from 'jsonwebtoken';
import secret from '../config/config.js'; // Предполагается, что файл конфигурации экспортирует переменную `secret`

class User {
    authMiddleware = (req, res, next) => {
        if (req.method === "OPTIONS") {
            return next();
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(403).json({message: "Пользователь не авторизован"});
            }

            const token = authHeader.split(' ')[1];
            req.user = jwt.verify(token, secret);

            next();
        } catch (e) {
            console.log(e);
            return res.status(403).json({message: "Пользователь не авторизован"});
        }
    };
}

export default new User