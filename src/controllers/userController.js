const Usuario = require('./../models/userModel');
const userController = {};

//Ver todos los usuarios
userController.allUsers = async (req, res) => {
    try {
        const users = await Usuario.findAll();    
        res.json(users);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        })
    };
};

//Ver un usuario
userController.user = async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = await Usuario.findOne( { where: {
            id: id
        } });

        //Validacion si existe el usuario con el id ingresado
        if (user !== null) {
            res.json({ user: user }); 
        } else {
            res.status(404).json({ mensaje: 'No existe el usuario con id ingresado'});
        };
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        });
    };    
};

//Crear usuario
userController.newUser = async (req, res) => {
    const { nombre, apellido } = req.body;

    try {
        const user = {
            nombre: nombre,
            apellido: apellido
        };

        const newUser = await Usuario.create(user);

        if (newUser) {            
            res.json(newUser);
        } else {
            res.status(400).json({ mensaje: 'No se pudo agregar el usuario'});
        };
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        });
    };    
};

//Borrar usuario
userController.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const usuarioEliminado = await Usuario.destroy({
            where: {
                id: id
            }
        });
        if (usuarioEliminado === 1) {
            res.json({ mensaje: 'Usuario eliminado exitosamente'});
        } else {
            res.status(404).json({ mensaje: `El usuario con el id = ${id} no existe`});
        };        
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        });
    };
};

//Actualizar usuario
userController.updateUser = async(req, res) => {
    const { id, nombre, apellido } = req.body;
       
    try {
        const usuario = {
            nombre: nombre,
            apellido: apellido
        };
        console.log(usuario)
        if (id) {
            await Usuario.update(usuario, {
                where: {
                    id: id
                }
            });
            res.json({ mensaje: 'Usuario actualizado'});
        } else {
            res.status(404).json( {mensaje: 'No existe el usuario con ese id'});
        };    
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        });
    };
};

// Exportamos el controlador
module.exports = userController;
