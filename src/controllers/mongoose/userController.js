const Usuario = require('./../../models/mongoose/userModel');

const userController = {};

userController.allUsers = async (req, res) => {
    try {
        const users = await Usuario.find({})

        res.json(users);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar mostrar los usuarios',
            error: error
        })
    };
};
//Ver un usuario
userController.user = async (req, res) => {
    try {
        const id  = req.params.id;    

        const user = await Usuario.findById(id)

        res.json(user);

    } catch (error) {
        let mensaje = 'Ocurrió un error al intentar mostrar el usuario';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el usuario con ese id'
        }    

        res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    };    
};

//Crear usuario
userController.newUser = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;

        const user = new Usuario ({
            nombre: nombre,
            apellido: apellido
        });

        await user.save();

        res.status(201).json({mensaje: 'Usuario creado exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    };    
};

//Borrar usuario
userController.deleteUser = async (req, res) => {
    try {
        const { id }  = req.body;

        await Usuario.findByIdAndDelete(id);

        res.json({ mensaje: 'Usuario borrado exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar borrar el usuario',
            error: error
        });
    };
};

//Actualizar usuario
userController.updateUser = async(req, res) => {
    try {
        const { id, nombre, apellido } = req.body;

        const usuario = {
            nombre: nombre,
            apellido: apellido
        };
        
        await Usuario.findByIdAndUpdate(id, usuario);

        res.json({ mensaje: 'Usuario actualizado exitosamente' });        
            
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al actualizar el usuario',
            error: error
        });
    };
};

// Exportamos el controlador
module.exports = userController;