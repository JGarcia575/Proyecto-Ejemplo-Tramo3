require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/userRoutes');
const bodyParse = require('body-parser');
const authRouter = require('./routes/authRoutes');
const fileUpload = require('express-fileupload');
const fileRouter = require('./routes/fileUpload');

const port = 3000;

//Middlewares
app.use(bodyParse.json());
app.use(fileUpload());

//Rutas
app.use(router);
app.use(authRouter);
app.use(fileRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

