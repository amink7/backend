const mongoose = require('mongoose');

const Soldado = mongoose.model('Soldado',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Arma = mongoose.model('Arma',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Soldado: Soldado,
  Arma: Arma
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
