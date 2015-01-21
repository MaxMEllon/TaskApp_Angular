(function() {
  angular.module('App', []).controller('MainController', [
    '$scope', '$filter', function($scope, $filter) {
      var originalTitle, where;
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
      $scope.$watch('todos', function(todos) {
        var all_count;
        all_count = todos.length;
        $scope.allCount = all_count;
        $scope.doneCount = where(todos, $scope.filter.done).length;
        return $scope.remainingCount = all_count - $scope.doneCount;
      }, true);
      originalTitle = '';
      $scope.editing = null;
      $scope.editTodo = function(todo) {
        originalTitle = todo.title;
        return $scope.editing = todo;
      };
      return $scope.doneEdit = function(todoForm) {
        var originaleTitle;
        if (todoForm.$invaild) {
          $scope.editingtitle = originalTitle;
        }
        return $scope.editing = originaleTitle = null;
      };
    }
  ]).directive('mySelect', [
    function() {
      return function(scope, $el, attrs) {
        return scope.$watch(attrs.mySelect, function(val) {
          if (val) {
            return $el[0].select();
          }
        });
      };
    }
  ]);

}).call(this);
