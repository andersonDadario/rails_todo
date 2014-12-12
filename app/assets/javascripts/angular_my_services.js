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