'use strict';

/**
 * @ngdoc overview
 * @name stumpYeoApp
 * @description
 * # stumpYeoApp
 *
 * Main module of the application.
 */
angular
  .module('stumpYeoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/beta', {
        templateUrl: 'views/beta.html',
        controller: 'BetaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
