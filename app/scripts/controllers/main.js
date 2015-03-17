'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('MainCtrl', function ($scope, $route) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-main';
    $scope.$route = $route;

  });
