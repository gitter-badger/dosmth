angular.module('dosmth')
	.controller('smthCtrl', function TodoCtrl($scope, $routeParams) {
		'use strict';

		var smths = $scope.smths;

		$scope.newSmth = '';

		$scope.addSmth = function(smth) {
			smth.info.push(this.new_smth);
			this.new_smth = {};
		};
	});
