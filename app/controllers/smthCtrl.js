angular.module('dosmth')
	.controller('smthCtrl', function smthCtrl($scope, $routeParams) {
		'use strict';

		//var smths = $scope.smths;
		$scope.smths = [
			{
				'name': 'Test event 1',
				'activity': 'Ultimate Testbee',
				'desc': 'Description.. Description'
			}
		];

		$scope.newSmth = '';

		$scope.addSmth = function(smths) {
			smths.push(this.new_smth);
			this.new_smth = {};
		};
	});
