const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    
});

const Usuario = model('Usuario', UsuarioSchema);

module.exports = Usuario;