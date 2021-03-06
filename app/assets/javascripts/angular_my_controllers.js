// TODOs
angular.module('todoApp.controllers', []).controller('TodoListController', [ '$scope', '$state', 'popupService', '$window', 'Todo', function($scope, $state, popupService, $window, Todo) {
  $scope.todos = Todo.query(); //fetch all todos. Issues a GET to /api/todos
 
  $scope.deleteTodo = function(todo) { // Delete a todo. Issues a DELETE to /api/todos/:id
    if (popupService.showPopup('Really delete this?')) {
      todo.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}]).controller('TodoViewController', [ '$scope', '$stateParams', 'Todo', function($scope, $stateParams, Todo) {
  $scope.todo = Todo.get({ id: $stateParams.id }); //Get a single todo.Issues a GET to /api/todos/:id

}]).controller('TodoCreateController', [ '$scope', '$state', '$stateParams', 'Todo', function($scope, $state, $stateParams, Todo) {
  $scope.todo = new Todo();  //create new todo instance. Properties will be set via ng-model on UI
 
  $scope.addTodo = function() { //create a new todo. Issues a POST to /api/todos
    $scope.todo.$save(function() {
      $state.go('Todos'); // on success go back to home i.e. todos state.
    });
  };
}]).controller('TodoEditController', [ '$scope', '$state', '$stateParams', 'Todo', function($scope, $state, $stateParams, Todo) {
  $scope.updateTodo = function() { //Update the edited todo. Issues a PUT to /api/todos/:id
    $scope.todo.$update(function() {
      $state.go('Todos'); // on success go back to home i.e. todos state.
    });
  };
 
  $scope.loadTodo = function() { //Issues a GET request to /api/todos/:id to get a todo to update
    $scope.todo = Todo.get({ id: $stateParams.id });
  };
 
  $scope.loadTodo(); // Load a todo which can be edited on UI
}]).controller('TodoWeatherController', [ '$scope', '$state', '$stateParams', 'Weather', function($scope, $state, $stateParams, Weather) {
  $scope.weather = Weather.get(); 
}]);