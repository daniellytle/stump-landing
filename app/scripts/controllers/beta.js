'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:BetaCtrl
 * @description
 * # BetaCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('BetaCtrl', function ($scope, $route) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-beta';
    $scope.$route = $route;

  });
