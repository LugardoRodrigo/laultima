const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Auto = new Schema({
  modelo: {
    type: String
  },
  marca: {
    type: String
  },
  color: {
    type: String
  },
  descripcion: {
    type: String
  },
  cilindraje: {
    type: String
  },
  precio: {
    type: Number
  },
  ano: {
    type: Number
  },
  imagen: {
    type: String
  }
}, {
  collection: 'autos'
})

module.exports = mongoose.model('Auto',Auto)
