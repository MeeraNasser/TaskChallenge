(function () {
    var taskModule = angular.module('taskModule',['ng']);

    taskModule.controller('taskController', function($scope,$http) {

        $scope.getTaskID = function(task){
            $scope.taskID = task.id;
        }

        $scope.updateTaskStatus = function(status){
            $http({
                  method : "GET",
                  url : "http://localhost:8900/tasks/updateTaskStatus",
                  params: { taskID: $scope.taskID , taskStatus: status}
              })
            window.location.replace("taskDisplay.html");
        }
        $scope.getAllTasks = function(){
          $http({
                method : "GET",
                url : "http://localhost:8900/tasks/retrieveTasks"
            })
            .then(function(response) {
              $scope.tasksList = response.data;
            }, function myError(response) {
                  console.log("Error",response);
            });
        }

        $scope.sortData = function (keyname) {
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        }

    });

})();
