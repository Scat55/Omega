import { check, validationResult } from 'express-validator';

class Validation {
// Middleware для проверки валидации регистрации
    validateRegistration = [
        check('email').isEmail().withMessage('Некорректный формат электронной почты'),
        check('password').isLength({
            min: 8,
            max: 20
        }).withMessage('Пароль должен содержать минимум 8 символов и максимум 20'),
        check('gender').notEmpty().withMessage('Пол обязателен'),
        check('type_user').isIn(['Ученик', 'Учитель', 'Эксперт']).withMessage('Тип пользователя должен быть Ученик, Учитель или Эксперт'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            next();
        }
    ];

// Middleware для проверки валидации входа
    validateLogin = [
        check('email').isEmail().withMessage('Некорректный формат электронной почты'),
        check('password').isLength({min: 6}).withMessage('Пароль должен содержать минимум 6 символов'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            next();
        }
    ];

}

export default new Validation;
