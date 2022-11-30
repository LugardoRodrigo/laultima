const express = require('express')
const app = express();
const autoRuta = express.Router();

let Auto = require('../models/Auto');

//Agregar un nuevo auto
autoRuta.route('/create').post((req, res, next) => {
  Auto.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//Metodo para obtener todos los empleados y todos los documentos
autoRuta.route('/').get((rq, res) => {
  Auto.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


//obtener un solo empleado por medio de su Id
autoRuta.route('/auto/:id').get((req, res, next) => {
  Auto.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//Metodo para actualizar a un empleado
autoRuta.route('/update/:id').put((req, res, next) => {
  Auto.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Se actualizo el documento exitosamente')
    }
  })
});

//Metodo para eliminar un empleado
autoRuta.route('/delete/:id').delete((req, res, next) => {
  Auto.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Se elimino el documento de manera exitosa')
    }
  })
});

module.exports = autoRuta;
