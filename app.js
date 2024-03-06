// app.js
(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.checkLunch = function () {
        // Get the items from the textbox and split them by commas
        var items = $scope.lunchItems ? $scope.lunchItems.split(',') : [];
  
        // Remove empty items
        items = items.filter(function (item) {
          return item.trim() !== '';
        });
  
        // Check the number of items and display appropriate message
        if (items.length === 0) {
          $scope.message = 'Please enter data first';
        } else if (items.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };
    }
  })();