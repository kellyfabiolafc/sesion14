const { Router } = require('express') // Manejador de rutas
const controller = require('../controllers/producto.controller') // Controlador (Lógica)

const router = Router() // Crear router (O considerar las rutas)

router.get('/', controller.listarProductos)
router.get('/:id', controller.obtenerProducto)
router.post('/', controller.crearProducto)
// Pendiente: PUT, POST, DELETE

module.exports = router