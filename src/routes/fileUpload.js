const fileRouter = require('express').Router();
const {
    subirArchivo
} = require('./../controllers/fileUpload');


fileRouter.post('/upload', subirArchivo);

module.exports = fileRouter;