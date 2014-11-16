require('./models/Events');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/events');

var app = angular.module('dosmth', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider.when('/', {
			controller: 'mainCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/smth/create', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/about', {
			controller: 'mainCtrl',
			templateUrl: 'views/aboutView1.html'
		}).when('/contact', {
			controller: 'mainCtrl',
			templateUrl: 'views/contactView.html'
		}).otherwise({
			redirectTo: '/'
		});
	});
