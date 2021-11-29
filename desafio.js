const express = require('express')
const Contenedor = require('./contenedor.js')
const app = express()
const PORT = 8080
usuario1 = new Contenedor(
   'cliver.JSON'
)

 const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
 })

 app.get('/productos', (req, res) => {
   res.send(usuario1.getAll())
})

 