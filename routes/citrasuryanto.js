var express = require ('express');
var router = express.Router();

const citrasuryantoController =
require ("../controller/citrasuryantoController")

router.get('/', citrasuryantoController.createwisata);

router.get("/",citrasuryantoController.readwisata);

router.delete('/:id',citrasuryantoController.deletewisata);

router.put('/:id',citrasuryantoController.updatewisata);

module.exports = router;
