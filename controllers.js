const { Soldado, Arma } = require("./models.js");


// ------- SoldadoS

exports.readSoldados = (req, res) =>
    Soldado.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readSoldado = (req, res) =>
    Soldado.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteSoldado = (req, res) =>
    Soldado.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateSoldado = (req, res) =>
    Soldado.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createSoldado = (req, res) =>
    new Soldado({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readArmas = (req, res) =>
    Arma.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArma = (req, res) =>
    Arma.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArma = (req, res) =>
    Arma.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateArma = (req, res) =>
    Arma.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArma = (req, res) =>
    new Arma({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

