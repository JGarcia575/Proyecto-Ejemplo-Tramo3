const fUploadController = {};

fUploadController.subirArchivo = (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ mensaje:'No se encontraron archivos para subir' });
    };

    try {
        const archivo = req.files.imagen; // nombre en el formulario de la imagen a subir
        const rutaPrincipal =   __dirname + '/../../temp/';  // o directamente '/temp/'
        const rutaGuardar = rutaPrincipal + archivo.name;
    
    archivo.mv(rutaGuardar, (error) => {
        if(error) {
            return res.status(500).json({error : error});
        };

        return res.json({ mensaje: 'Archivo subida con éxito'});

    });      
    } catch (error) {
        return res.status(500).json({error : 'Ocurrió un error'});
    };     
};

module.exports = fUploadController;

