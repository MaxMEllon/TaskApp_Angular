(function() {
  angular.module('App', []).controller('MainController', [
    '$scope', '$filter', function($scope, $filter) {
      var where;
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
      $scope.changeFilter = function(filter) {
        return $scope.currentFilter = filter;
      };
      where = $filter('filter');
      return $scope.$watch('todos', function(todos) {
        var all_count;
        all_count = todos.length;
        $scope.allCount = all_count;
        $scope.doneCount = where(todos, $scope.filter.done).length;
        return $scope.remainingCount = all_count - $scope.doneCount;
      }, true);
    }
  ]);

}).call(this);
