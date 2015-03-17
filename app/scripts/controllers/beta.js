'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:BetaCtrl
 * @description
 * # BetaCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('BetaCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-beta';
    $scope.isActive = function(route) {
        return route === $location.path();
    }

  });
