require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/userRoutes');
const bodyParse = require('body-parser');
const authRouter = require('./routes/authRoutes');
const fileUpload = require('express-fileupload');
const fileRouter = require('./routes/fileUpload');
const { mysqlConexion } = require('./config/mysqlConection');
const mongoConexion = require('./config/mongoConection'); 

const port = 3000;

//Middlewares
app.use(bodyParse.json());
app.use(fileUpload());

//Rutas
app.use(router);
app.use(authRouter);
app.use(fileRouter);

//Probar conexión a base de datos mysql
//mysqlConexion();
//Conexión a base de datos mongo
mongoConexion();

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

