// server.js
// Necesitamos que app haya gestionado toda la configuración
const app = require('./app')
const { port } = require('./config/env')
const { probarConexion } = require('./config/database')

const iniciarServidor = async () => {
    try {
        await probarConexion()
        console.log('Conexión a MySQL exitosa')

        //Levantamos los servicios
        app.listen(port, () => {
            console.log(`Servidor iniciado en http://localhost:${port}`)
        })
    } catch (e) {
        console.error('No podemos conectarnos a MySQL', e.message)
        process.exit(1)
    }
}

iniciarServidor()