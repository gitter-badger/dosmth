var app = angular.module('dosmth', ['ngRoute', 'google-maps'.ns()])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider.when('/', {
			controller: 'smthCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/smth/create', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/smth/modify/:id', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/about', {
			controller: 'mainCtrl',
			templateUrl: 'views/aboutView.html'
		}).when('/contact', {
			controller: 'mainCtrl',
			templateUrl: 'views/contactView.html'
		}).otherwise({
			redirectTo: '/'
		});
	});
