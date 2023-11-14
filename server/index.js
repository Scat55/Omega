import express from "express";

const app = express();
// const userRoutes = require('./api/users');
// const productRoutes = require('./api/products');


app.use(express.json());
app.get("/test","test":"rctfvygbuhnijmok")

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});















