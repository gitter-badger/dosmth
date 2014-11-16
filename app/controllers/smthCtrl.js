angular.module('dosmth')
	.controller('smthCtrl', function smthCtrl($scope, $routeParams) {
		'use strict';

		//var smths = $scope.smths;
		var smths = $scope.smths = [
			{
				'id': '0',
				'coord': ['43.4822200', '-80.5467194'],
				'name': 'Test event 1',
				'activity': 'Ultimate Testbee',
				'loc': 'DC',
				'desc': 'Description.. Description'
			},
			{
				'id': '1',
				'coord': ['43.4822200', '-80.5467169'],
				'name': 'Test event 2',
				'activity': 'Angular time',
				'loc': 'MC',
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
