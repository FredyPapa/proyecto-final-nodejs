const Joi = require("joi");
let timestamp = Joi.string().min(3);
let email = Joi.string().min(3);
let password = Joi.string().min(3);
let nombre = Joi.string().min(3);
let direccion = Joi.string().min(3);
let edad = Joi.string().min(3);
let telefono = Joi.string().min(3);
let foto = Joi.string().min(3);

const usuariosSchema = {
    timestamp: timestamp.required(),
    email: email.required(),
    password: password.required(),
    nombre: nombre.required(),
    direccion: direccion.required(),
    edad: edad.required(),
    telefono: telefono.required(),
    foto: foto.required(),
}


module.exports = {
    usuariosSchema
}