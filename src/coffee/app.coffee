angular.module 'App', []
  .controller('MainController', [
    '$scope',
    '$filter'
    ($scope, $filter)->
      $scope.todos = []
      $scope.newTitle = ''

      $scope.addTodo = ->
        $scope.todos.push
          title: $scope.newTitle
          done: false
        $scope.newTitle = ''

      $scope.filter =
        done: { done: true }
        remaining: { done: false }

      $scope.currentFilter = null

      $scope.changeFilter =(filter)->
        $scope.currentFilter = filter

      where = $filter('filter')
      $scope.$watch 'todos', (todos)->
        all_count = todos.length
        $scope.allCount = all_count
        $scope.doneCount = where(todos, $scope.filter.done).length
        $scope.remainingCount = all_count - $scope.doneCount
      , true

      originalTitle = ''
      $scope.editing = null

      $scope.editTodo =(todo)->
        originalTitle = todo.title
        $scope.editing = todo

      $scope.doneEdit =(todoForm)->
        $scope.editingtitle = originalTitle if todoForm.$invaild
        $scope.editing = originaleTitle = null
  ])
  .directive('mySelect',
    [ ->
        (scope, $el, attrs)->
          scope.$watch(attrs.mySelect, (val)->
            $el[0].select() if val
          )
    ])

