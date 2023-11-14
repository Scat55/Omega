import jwt from 'jsonwebtoken';
import secret from '../config/config.js'; // Убедитесь, что указан правильный путь к файлу конфигурации

class Role {

    roleMiddleware = (roles) => {
        return (req, res, next) => {
            if (req.method === 'OPTIONS') {
                next();
                return;
            }

            try {
                const authorizationHeader = req.headers.authorization;
                if (!authorizationHeader) {
                    return res.status(403).json({message: 'Пользователь не авторизован1'});
                }

                const tokenFromHeaders = authorizationHeader.split(' ')[1];
                const tokenFromSession = req.session.token;

                if (tokenFromHeaders !== tokenFromSession) {
                    return res.status(403).json({message: 'Пользователь не авторизован2'});
                }

                const {type_user, user_id, email} = jwt.verify(tokenFromHeaders, secret);
                req.user_id = user_id;
                req.type_user = type_user;
                req.email = email;

                if (!roles.includes(type_user)) {
                    return res.status(403).json({message: 'У вас нет доступа'});
                }

                next();
            } catch (e) {
                console.log(e);
                return res.status(403).json({message: 'Пользователь не авторизован3'});
            }
        };
    };
}
export default new Role;