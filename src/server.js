require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/userRoutes');
const bodyParse = require('body-parser');
const authRouter = require('./routes/authRoutes');

const port = 3000;

//Middlewares
app.use(bodyParse.json());

//Rutas
app.use(router);
app.use(authRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

