(function(){
  'use strict';

  angular.module('i-fit')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){
    $scope.client = {};

    User.show().then(function(response){
      $scope.client = response.data.client;
    });

    $scope.update = function(){
      User.update($scope.user).then(function(response){
        $scope.client = response.data.client;
      });
    };

    $scope.updateGoals = function(){
      User.updateGoals($scope.goals).then(function(response){
        $scope.client.goals = response.data.goals;
      });
    };

    $scope.toggleUserForm = function(){
      $scope.hideUserForm = !!!$scope.hideUserForm;
    };

    $scope.toggleGoalForm = function(){
      $scope.hideGoalForm = !!!$scope.hideGoalForm;
    };
  }]);
})();

