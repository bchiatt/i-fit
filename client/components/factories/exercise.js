(function(){
  'use strict';

  angular.module('i-fit')
  .factory('Exercise', ['$http', function($http){

    function create(exercise){
      return $http.post('/dashboard/exercise', exercise);
    }

    function all(){
      return $http.get('/dashboard/exercise');
    }

    return {create:create, all:all};
  }]);
})();
