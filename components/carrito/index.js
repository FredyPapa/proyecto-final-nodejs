const { Router }  = require("express");
//
const carritoArchivo  = require("./controller/carritoArchivoController");
const carritoMongoDB = require('./controller/carritoMongoDBController');
const carritoFirebase = require('./controller/carritoFirebaseController');

const apiCarrito = app =>{
    const routerArchivo = new Router();
    const routerMongoDB = new Router();
    const routerFirebase = new Router();
    
    //Archivo
    app.use("/api/carritoArchivo", routerArchivo);
    //Crea un carrito
    routerArchivo.post("/", carritoArchivo.carritoPost);
    //Eliminar carrito por id
    routerArchivo.delete("/:id", carritoArchivo.carritoDelete);
    //Listar los productos de un carrito por id
    routerArchivo.get("/:id/productos", carritoArchivo.carritoGetByIdProductos);
    //Agregar producto a un carrito por id
    routerArchivo.post("/:id/productos", carritoArchivo.carritoPostByIdProducto);
    //Eliminar producto del carrito por id
    routerArchivo.delete("/:id/productos/:id_prod", carritoArchivo.carritoProductoDelete);

    //MongoDB
    app.use("/api/carritoMongoDB", routerMongoDB);
    //Crea un carrito
    routerMongoDB.post("/", carritoMongoDB.carritoPost);
    //Eliminar carrito por id
    routerMongoDB.delete("/:id", carritoMongoDB.carritoDelete);
    //Listar los productos de un carrito por id
    routerMongoDB.get("/:id/productos", carritoMongoDB.carritoGetByIdProductos);
    //Agregar producto a un carrito por id
    routerMongoDB.post("/:id/productos", carritoMongoDB.carritoPostByIdProducto);
    //Eliminar producto del carrito por id
    routerMongoDB.delete("/:id/productos/:id_prod", carritoMongoDB.carritoProductoDelete);
    //Generar Pedido de un carrito por id
    routerMongoDB.get("/:id/pedido", carritoMongoDB.carritoGetByIdPedido);

    //Firebase
    app.use("/api/carritoFirebase", routerFirebase);
    //Crea un carrito
    routerFirebase.post("/", carritoFirebase.carritoPost);
    //Eliminar carrito por id
    routerFirebase.delete("/:id", carritoFirebase.carritoDelete);
    //Listar los productos de un carrito por id
    routerFirebase.get("/:id/productos", carritoFirebase.carritoGetByIdProductos);
    //Agregar producto a un carrito por id
    routerFirebase.post("/:id/productos", carritoFirebase.carritoPostByIdProducto);
    //Eliminar producto del carrito por id
    routerFirebase.delete("/:id/productos/:id_prod", carritoFirebase.carritoProductoDelete);
}

module.exports = {
    apiCarrito
}
