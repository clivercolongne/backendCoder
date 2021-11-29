const express = require('express')
const app = express()
const PORT = 8080

 const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
 })

 app.get('/productos', (req, res) => {
   res.send()
})

 