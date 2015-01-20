(function() {
  angular.module('App', []).controller('MainController', [
    '$scope', function($scope) {
      $scope.todos = [];
      return $scope.addTodo = function() {
        return $scope.todos.push({
          title: Math.random(),
          done: false
        });
      };
    }
  ]);

}).call(this);
