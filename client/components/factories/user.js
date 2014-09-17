(function(){
  'use strict';

  angular.module('i-fit')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function update(user){
      return $http.post('/profile', user);
    }

    function updateGoals(goals){
      return $http.post('/profile/goals', goals);
    }

    function show(){
      return $http.get('/profile');
    }

    return {register:register, login:login, logout:logout, update:update, updateGoals:updateGoals, show:show};
  }]);
})();

