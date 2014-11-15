angular.module('dosmth', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'mainCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/smth/create', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).otherwise({
			redirectTo: '/'
		});
	});