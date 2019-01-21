const tasksModel = require('../models/Tasks');

exports.getAllTasks = function(req,res){
  tasksModel.getAllTasks().then(function(tasks){
    res.json(tasks);
  }).catch(function(err) {
            res.status(500).json(err.message);
        });
}

exports.updateTaskStatus = function(req,res){
  tasksModel.updateTaskStatus(req.query.taskID,req.query.taskStatus)
    .catch(function(err) {
      console.log("Errorrr",err);
            res.status(500).json(err.message);
        });
}

exports.CreateTask = function(req,res){
  tasksModel.createTasks(req.body.tasks)
  // .then(function (data) {
  //   res.status(200).json(data);
  // })
    // .catch(function(err) {
    //   console.log("Errorrr",err);
    //         res.status(500).json(err.message);
    //     });
}
