const { Cliente, Articulo } = require("./models.js");

exports.readClientes = (req, res) => 
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

// ...