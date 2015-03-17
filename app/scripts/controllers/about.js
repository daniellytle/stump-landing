'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-about';

  });
