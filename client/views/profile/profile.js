(function(){
  'use strict';

  angular.module('i-fit')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){
    $scope.client = {};

    User.show().then(function(response){
      $scope.client = response.data.client;
      $scope.weight = response.data.client.weights[response.data.client.weights.length - 1].wt;
      $scope.calculateBmi($scope.client, $scope.weight);
    });

    $scope.calculateBmi = function(client, weight){
      $scope.bmi = parseFloat(weight / (Math.pow(client.height, 2)) * 703).toFixed(1);
    };

    $scope.update = function(){
      User.update($scope.user).then(function(response){
        $scope.client = response.data.client;
        $scope.weight = response.data.client.weights[response.data.client.weights.length - 1].wt;
        $scope.calculateBmi($scope.client, $scope.weight);
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

