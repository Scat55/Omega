import express from "express";
import cors from 'cors';
const app = express();
import secret from './config/config.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';

import session from "express-session";

// const userRoutes = require('./api/users');
// const productRoutes = require('./api/products');

app.use(cors());
app.use(express.json());
app.get('/test', (req, res) => {
  res.send('Добро пожаловать на мой сервер!');
});

app.use(session({
  secret: secret, // Замените 'your_secret_key' на ваш секретный ключ
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' } // Используйте 'auto' или false во время разработки, true в продакшне
}));

app.use('/api', userRouter)
app.use('/auth', authRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});















