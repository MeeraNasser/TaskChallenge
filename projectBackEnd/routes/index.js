var express = require('express');
var router = express.Router();

// router.use('/Tasks', TasksController);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/taskretireve', TasksController.getAllTasks);

module.exports = router;
