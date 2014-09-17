(function(){
  'use strict';

  angular.module('i-fit')
  .controller('DashboardCtrl', ['$scope', 'Food', 'Exercise', function($scope, Food, Exercise){
    $scope.foodType = ['Fruit', 'Vegetable', 'Carbohydrate', 'Protein', 'Dairy', 'Other'];
    $scope.excerTypes = ['weights', 'sports', 'yoga', 'running', 'swimming', 'biking'];
    $scope.intensities = ['low', 'medium', 'high'];
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
      $scope.exercises.push($scope.exercise);
      $scope.exercise = {};
    };

    Food.all().then(function(response){
      console.log('>>>>>>>>>>>>>>>>dashboard.js/Food.all()');
      $scope.foods = response.data.foods;
      console.log('>>>>>>>>dashboard.js/Food.all(); response:', response);
    });

    $scope.addFood = function(){
      Food.create($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

  }]);
})();

