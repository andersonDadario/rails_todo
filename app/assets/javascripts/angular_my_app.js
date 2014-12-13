// TODOs
angular.module('todoApp', ['ui.router', 'ngResource', 'todoApp.controllers', 'todoApp.services', 'weatherApp.services', 'templates']);
angular.module('todoApp').config([ '$httpProvider', function($httpProvider){

  // CSRF Token
  csrfToken = $("meta[name=\"csrf-token\"]").attr("content");
  //$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken
  $httpProvider.defaults.headers.post["X-CSRF-TOKEN"] = csrfToken
  $httpProvider.defaults.headers.put["X-CSRF-TOKEN"] = csrfToken
  $httpProvider.defaults.headers["delete"] = { "X-CSRF-TOKEN": csrfToken }

}]).config([ '$stateProvider', function($stateProvider) {

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
  }).state('Weather', { //state for updating a Todo
    url: '/weather',
    templateUrl: 'weather.html',
    controller: 'TodoWeatherController'
  });
}]).run([ '$state', function($state) {
  $state.go('Todos'); //make a transition to Todos state when app starts
}]);