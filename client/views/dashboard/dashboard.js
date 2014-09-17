(function(){
  'use strict';

  angular.module('i-fit')
  .controller('DashboardCtrl', ['$scope', function($scope){
    $scope.foodType = ['Fruit', 'Vegetable', 'Carbohydrate', 'Protein', 'Dairy', 'Other'];
    $scope.excerTypes = ['weights', 'sports', 'yoga', 'running', 'swimming', 'biking'];
    $scope.intensities = ['LOW', 'MEDIUM', 'HIGH'];
    $scope.foods = [];
    $scope.food = {};
    $scope.exercises = [];
    $scope.exercise = {};

    $scope.toggleFood = function(){
      $scope.hideFood = !!!$scope.hideFood;
    };

    $scope.toggleEx = function(){
      $scope.hideEx = !!!$scope.hideEx;
    };

    $scope.addEx = function(){
      $scope.exercises.push($scope.exercise);
      $scope.exercise = {};
    };

    $scope.addFood = function(){
      $scope.foods.push($scope.food);
      $scope.food = {};
    };
  }]);
})();

