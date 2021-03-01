const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/soldados",      cors(), controller.readSoldados);   // Read All
router.get    ("/soldados/:id",  cors(), controller.readSoldado);    // Read
router.delete ("/soldados/:id",  cors(), controller.deleteSoldado);  // Delete
router.put    ("/soldados/:id",  cors(), controller.updateSoldado);  // Update
router.post   ("/soldados",      cors(), controller.createSoldado);  // Create

router.get    ("/armas",     cors(), controller.readArmas);  // Read All
router.get    ("/armas/:id", cors(), controller.readArma);   // Read
router.delete ("/armas/:id", cors(), controller.deleteArma); // Delete
router.put    ("/armas/:id", cors(), controller.updateArma); // Update
router.post   ("/armas",     cors(), controller.createArma); // Create


module.exports = router;
