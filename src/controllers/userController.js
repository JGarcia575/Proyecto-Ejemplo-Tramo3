const userController = {};

//Ver todos los usuarios
userController.allUsers = (req, res) => {
    res.json( { mensaje: "todos los usuarios" });
};

//Ver un usuario
userController.user = (req, res) => {
    res.json( { mensaje: "el usuario"});
};

//Crear usuario
userController.newUser = (req, res) => {
    const { nombreUsuario, email } = req.body;    
    res.json( { mensaje: "usuario creado"});
   
};

//Borrar usuario
userController.deleteUser = (req, res) => {
    res.json( { mensaje: "usuario borrado"});
};

//Actualizar usuario
userController.updateUser = (req, res) => {
    res.json( { mensaje: "usuario actualizado"});
}

// Exportamos el controlador
module.exports = userController;