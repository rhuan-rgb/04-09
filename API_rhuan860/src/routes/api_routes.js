// importando o módulo Router do express
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

// importa a controller onde contém a lógica relacionada a professores
const teacher_controller = require('../controllers/teacher_controller');

// Rota POST para '/teacher
router.post('/teacher/',teacher_controller.post_teacher);
router.get('/teacher/', teacher_controller.get_teacher);

module.exports = router

// importa a controller que contém a lógica de números par e primo
const controllerNumbers = require("../controllers/controllerNumbers");

//rota POST para '/primo/'
router.post('/primo/', controllerNumbers.checkPrimo);

//rota POST para '/par/'
router.post('/par/', controllerNumbers.checkPar);



