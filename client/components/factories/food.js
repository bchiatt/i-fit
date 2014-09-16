(function(){
  'use strict';

  angular.module('i-fit')
  .factory('Food', ['$http', function($http){

    function create(food){
      return $http.post('/dashboard/food', food);
    }

    function all(){
      return $http.get('/dashboard/food');
    }

    return {create:create, all:all};
  }]);
})();
