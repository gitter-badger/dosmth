angular.module('dosmth')
	.controller('smthCtrl', function smthCtrl($scope, $routeParams) {
		'use strict';

		var smths = $scope.smths;

		$scope.newSmth = '';

		$scope.addSmth = function(smths) {
			smths.push(this.new_smth);
			this.new_smth = {};
		};
	});
