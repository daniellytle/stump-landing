'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-main';
    
    $scope.isActive = function(route) {
    	console.log($location.path());
        return route === $location.path();
    };

  });
