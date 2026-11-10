// PASO 1
// const objeto = require('') // TODOS LAS FUNCIONES
// const { otroObjeto } = require('') // SOLO ALGUNAS FUNCIONES

const { pool } = require('../config/database')
const CAMPOS = 'id, marca, descripcion, precio, stock' // Dato común


// Comentario: Define un campus con su identificador, marca, descripción, precio y stock.
// Todas las funciones serán asíncronas para esperar los resultados.
// Los tiempos se expresan en milisegundos (1000 ms = 1 segundo).
// Todas las funciones reciben y envían datos mediante pasarelas.
// req significa que un parámetro es obligatorio y res representa el resultado.
const listarProductos = async (req, res)=> {}

const obtenerProducto = async (req, res)=> {}

const crearProducto = async (req, res)=> {}

const actualizarProducto = async (req, res)=> {}

const eliminarProducto = async (req, res)=> {}

// Todos los métodos deben ser EXPORTADOS (se utilizarán desde la app)
// el que lo utilizará será "routes"
module.exports = {
    listarProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}