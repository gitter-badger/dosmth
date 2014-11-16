angular.module('dosmth')
	.controller('smthCtrl', function smthCtrl($scope, $routeParams) {
		'use strict';

		//var smths = $scope.smths;
		var smths = $scope.smths = [
			{
				'id': '0',
				'name': 'Test event 1',
				'activity': 'Ultimate Testbee',
				'desc': 'Description.. Description'
			},
			{
				'id': '1',
				'name': 'Test event 2',
				'activity': 'Angular time',
				'desc': 'Description.. Description'
			}
		];

		$scope.smth = '';

		//check this to exists after
		if ($routeParams.id) {
			$scope.smth = smths[$routeParams.id];
		}

		$scope.addSmth = function() {
			$scope.smth.id = smths.length+1;
			smths.push($scope.smth);
			$scope.smth = {};
		};

		$scope.editSmth = function () {
			smths[$scope.smth.id] = $scope.smth;
			$scope.smth = {};
		};
	});
