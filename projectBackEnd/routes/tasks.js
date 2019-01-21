var express = require('express');
var router = express.Router();
const TasksController = require('../Controllers/tasksController.js');
/* GET tasks listing. */

router.get('/retrieveTasks', TasksController.getAllTasks);
router.get('/updateTaskStatus', TasksController.updateTaskStatus);
router.post('/createTasks', TasksController.CreateTask);

module.exports = router;
