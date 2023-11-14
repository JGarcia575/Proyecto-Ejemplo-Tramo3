const  express = require('express');
const router = express.Router();

const { allUsers, 
    user,
    newUser,
    deleteUser,
    updateUser
} = require('./../controllers/userController');

const {
    allUsers: allUsersMongoose,
    user: userMongoose,
    newUser: newUserMongoose,
    deleteUser: deleteUserMongoose,
    updateUser: updateUserMongoose
} = require('./../controllers/mongoose/userController.js');

//Ruta para ver todos los usuarios
router.get('/users', allUsers);

//Ruta para mostrar un usuario en particular
router.get('/user', user);

//Ruta para crear un usuario
router.post('/new', newUser);

//Ruta para borrar un usuario
router.delete('/delete', deleteUser);

//Ruta para actualizar un usuario
router.put('/update', updateUser);

//Ruta para ver todos los usuarios mongoose
router.get('/m/users', allUsersMongoose);

//Ruta para ver un usuario mongoose
router.get('/m/user/:id', userMongoose);

//Ruta para crear un usuario mongoose
router.post('/m/newUser', newUserMongoose);

//Ruta para eliminar un usuario mongoose
router.delete('/m/delete', deleteUserMongoose);

//Ruta para actualizar un usuario mongoose
router.put('/m/update', updateUserMongoose);

module.exports = router;