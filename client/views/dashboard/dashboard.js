(function(){
  'use strict';

  angular.module('i-fit')
  .controller('DashboardCtrl', ['$scope', 'Food', 'Exercise', function($scope, Food, Exercise){
    $scope.foodType = ['Fruit', 'Vegetable', 'Carbohydrate', 'Protein', 'Dairy', 'Other'];
    $scope.excerTypes = ['weights', 'sports', 'yoga', 'running', 'swimming', 'biking'];
    $scope.intensities = ['low', 'medium', 'high'];
    $scope.sortFood = '';
    $scope.sortExer = '';
    $scope.foods = [];
    $scope.food = {};
    $scope.exercises = [];
    $scope.exercise = {};

    Food.all().then(function(response){
      $scope.foods = response.data.foods;
    });

    Exercise.all().then(function(response){
      $scope.exercises = response.data.exercises;
    });

    $scope.toggleFood = function(){
      $scope.hideFood = !!!$scope.hideFood;
    };

    $scope.toggleEx = function(){
      $scope.hideEx = !!!$scope.hideEx;
    };

    $scope.addEx = function(){
      Exercise.create($scope.exercise).then(function(response){
        $scope.exercises.push(response.data.exercise);
        $scope.exercise = {};
      });
    };

    Food.all().then(function(response){
      $scope.foods = response.data.foods;
    });

    $scope.addFood = function(){
      Food.create($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

  }]);
})();

