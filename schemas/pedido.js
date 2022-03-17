const Joi = require("joi");

let timestamp = Joi.string().min(3);
let idCarrito = Joi.string().min(3);
let idPedido = Joi.string().min(3);
let iEstadoPedido = Joi.string().min(3);

const carritosSchema = {
    timestamp:timestamp.required(),
    idCarrito: idCarrito.required(),
    idPedido: idPedido.required(),
    iEstadoPedido: iEstadoPedido.required()
}

module.exports = {
    carritosSchema
}

