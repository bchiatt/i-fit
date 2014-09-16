(function(){
  'use strict';

  angular.module('i-fit')
  .controller('DashboardCtrl', ['$scope', function($scope){
    $scope.foodType = ['Fruit', 'Vegetable', 'Carbohydrate', 'Protein', 'Dairy', 'Other'];

    $scope.toggleFood = function(){
      $scope.hideFood = !!!$scope.hideFood;
    };
  }]);
})();

