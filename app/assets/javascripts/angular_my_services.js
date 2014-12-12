// TODOs
angular.module('todoApp.services',[]).factory('Todo',function($resource){
    return $resource('/api/v1/todos/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        },
        delete: {
        	method: 'DELETE'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});


// Weather
angular.module('weatherApp.services',[]).factory('Weather', function($http, $resource){

    //delete $http.defaults.headers.common["X-CSRF-TOKEN"];
    //angular.module('todoApp', [])
    //.config(['$httpProvider', function($httpProvider) {
    //    delete $httpProvider.defaults.headers.common["X-CSRF-TOKEN"];
    //}]);

    return $resource('http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se');
});