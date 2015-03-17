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
        controller: 'MainCtrl',
        activetab: 'home'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        activetab: 'team'
      })
      .when('/beta', {
        templateUrl: 'views/beta.html',
        controller: 'BetaCtrl',
        activetab: 'beta'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
