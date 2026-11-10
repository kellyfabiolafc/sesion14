//Nuestra aplicación puede tener muchos módulos
//Productos > producto.controller > producto.routes
//Clientes > cliente.controller > cliente.routes
//Proveedores > proveedor.controller > proveedor.routes

//Todas las rutas se organizan gracias a index (índice)
const { Router, Router } = require('express')

//Esto se realiza por cada rutas **
const productoRoutes = require('./producto.routes')

//Esto es solo una para todas las rutas
const router = Router()

//Esto es por cada ruta **
router.use('/productos', productoRoutes)

//Se exportan todas las rutas
module.exports = router