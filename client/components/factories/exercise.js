(function(){
  'use strict';

  angular.module('i-fit')
  .factory('Exercise', ['$http', '$food', '$user', function($http, $food, $user){

    function create(exercise){
      return $http.post('/exercise', exercise);
    }

    function all(){
      return $http.get('/exercise');
    }

    return {create:create, all:all};
  }]);
})();
