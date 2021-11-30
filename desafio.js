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





(async () => {
   await usuario1.save(
      {
         "title": "Escuadra",
         "price": 123.45,
         "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
         "id": 1
      }   
   )
   await usuario1.save(
      {
         "title": "Calculadora",
         "price": 234.56,
         "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
         "id": 2
       }
   )
   await usuario1.save(
      {
   "title": "Globo Terráqueo",
   "price": 345.67,
   "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
   "id": 3
 }
   )
})()


   

app.get('/productos', (req, res) => {
   res.send(usuario1.getAll())
});
app.get('/productosRandom', (req, res) => {
   res.send(usuario1.getById(usuario1.random()))
});
 