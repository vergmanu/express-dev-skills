var express = require('express');
var router = express.Router();

//Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
 // All actual paths start with "/todos"
 router.get('/', skillsCtrl.index);
 router.get('/new', skillsCtrl.new);
 router.get('/:id', skillsCtrl.show);
 router.post('/', skillsCtrl.create);
 router.delete('/:id', skillsCtrl.delete);

module.exports = router;
