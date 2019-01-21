var connection = require('./index.js');
var DataTypes = require('sequelize');

  var tasks =  connection.define('tasks', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
      field: 'id'
    },
    fromLocation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'fromLocation'
    },
    toLocation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'toLocation'
    },
    deliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'deliveryDate'
    },
    startedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'startedAt'
    },
    driverName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'driverName'
    },
    finishedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'finishedAt'
    },
    courier: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'courier'
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'description'
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'status'
    },
    driverComment: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'driverComment'
    }
  }, {
    tableName: 'Tasks',
    timestamps :false
  });

  tasks.getAllTasks = function(){
    return tasks.findAll({
        attributes: ['id','courier','driverName','status','description','startedAt','finishedAt','driverComment','deliveryDate']
      });
  };

  tasks.updateTaskStatus = function(taskID,taskStatus){
    var taskObj = { status:taskStatus};
       tasks.update(taskObj, {
        where: {
          id: taskID
        }
      })
  };

  tasks.createTasks = function(task){
       tasks.bulkCreate(task);
  };

  module.exports =  tasks;
