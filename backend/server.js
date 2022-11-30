//declaramos propiedades
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// conexion con la base de datos
mongoose
  .connect('mongodb+srv://rigo:7777@carrito.nn91imp.mongodb.net/?retryWrites=true&w=majority')
  //.connect('mongodb+srv://rigols:1234@proyectorl.jrtwz.mongodb.net/?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Conectado a Mongo! Base de Datos: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('error al conectarse con MongoDB', err.reason)
  })

//configuramos el servidor de express
const app = express()
const autoRuta = require('./routes/auto.route.js')
const {
  create
} = require('domain')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)


app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/auto')))
app.use('/', express.static(path.join(__dirname, 'dist/auto')))
app.use('/api', autoRuta)

//crear puerto o lo abrimos
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Conectada a puerto' + port)
})

app.use((req, res, next) => {
  next(createError(404))
})

//manejador de errores
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err, statusCode).send(err.message)
})
