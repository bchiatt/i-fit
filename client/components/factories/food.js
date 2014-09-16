(function(){
  'use strict';

  angular.module('i-fit')
  .factory('Food', ['$http', '$exercise', '$user', function($http, $exercise, $user){

    function create(food){
      return $http.post('/food', food);
    }

    function all(){
      return $http.get('/food');
    }

    return {create:create, all:all};
  }]);
})();
