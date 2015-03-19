'use strict';

/**
 * @ngdoc function
 * @name stumpYeoApp.controller:BetaCtrl
 * @description
 * # BetaCtrl
 * Controller of the stumpYeoApp
 */
 angular.module('stumpYeoApp')
 .controller('BetaCtrl', function ($scope, $http) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.pageName = 'page-beta';

 	$scope.subscribe = function() {
 		console.log($scope.email);

 		$http({
 			url:'//herokuapp.us10.list-manage.com/subscribe/post?u=299e615fb04294cff99af6995&amp;id=47cd1bcca1',
 			method:"POST",
 			data: {
	 			apikey 	: '1a821b91d2eb5846b89dc9fa536ea925-us10',
	 			id		: "47cd1bcca1", 
	 			email 	: {
	 				email:	$scope.email 
	 			}
 			},
 			dataType: 'json',
 			contentType: "application/json; charset=utf-8"

 		}).success(function() {
 			alert('YAY');
 		}).error(function() {
 			alert('NOO');
 		});
 	}

 });
