angular.module('todoApp', ['ui.router', 'ngResource', 'todoApp.controllers', 'todoApp.services', 'templates']);


angular.module('todoApp').config(function($httpProvider){

  authToken = $("meta[name=\"csrf-token\"]").attr("content")
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

}).config(function($stateProvider) {

  $stateProvider.state('Todos', { // state for showing all Todos
    url: '/todos',
    templateUrl: 'list.html',
    controller: 'TodoListController'
  }).state('viewTodo', { //state for showing single Todo
    url: '/todos/:id/view',
    templateUrl: 'view.html',
    controller: 'TodoViewController'
  }).state('newTodo', { //state for adding a new Todo
    url: '/todos/new',
    templateUrl: 'new.html',
    controller: 'TodoCreateController'
  }).state('editTodo', { //state for updating a Todo
    url: '/todos/:id/edit',
    templateUrl: 'edit.html',
    controller: 'TodoEditController'
  });
}).run(function($state) {
  $state.go('Todos'); //make a transition to Todos state when app starts
});
