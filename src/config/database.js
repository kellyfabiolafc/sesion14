const mysql = require('mysql2/promise')
const { db } = require('./env')

//Este archivo gestiona la conexión al SERVER y a la BD
const pool = mysql.createPool({
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  waitForConnections: true,
  connectionLimit: db.connectionLimit,
  queueLimit: 0
})

//Verificar la conexión
const probarConexion = async() => {
  const conexion = await pool.getConnection()
  await conexion.ping() //test
  conexion.release()//Desconexión
  
}

//Exportar la conexión
module.exports = { pool, probarConexion }