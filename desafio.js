const express = require('express')
const Contenedor = require('./contenedor.js')
const app = express()
const PORT = 8080
usuario1 = new Contenedor(
   'cliver.JSON'
);

const connectedServer = app.listen(PORT, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
});

app.get('/productos', (req, res) => {
   res.send(usuario1.getAll())
});

(async () => {
   await usuario1.save([
      {
         "title": "Escuadra",
         "price": 123.45,
         "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
         "id": 1
      }
   ])
})()
 