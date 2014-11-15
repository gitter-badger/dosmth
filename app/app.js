angular.module('dosmth', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/create', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).otherwise({
			redirectTo: '/'
		});
	});