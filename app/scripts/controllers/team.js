'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the stumpYeoApp
 */
angular.module('stumpYeoApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageName = 'page-team';

  });
