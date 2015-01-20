(function() {
  angular.module('App', []).controller('MainController', [
    '$scope', function($scope) {
      $scope.todos = [];
      $scope.newTitle = '';
      $scope.addTodo = function() {
        $scope.todos.push({
          title: $scope.newTitle,
          done: false
        });
        return $scope.newTitle = '';
      };
      $scope.filter = {
        done: {
          done: true
        },
        remaining: {
          done: false
        }
      };
      $scope.currentFilter = null;
      return $scope.changeFilter = function(filter) {
        return $scope.currentFilter = filter;
      };
    }
  ]);

}).call(this);
