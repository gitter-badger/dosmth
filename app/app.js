var app = angular.module('dosmth', []);

app.directive('smthView', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/smthView.html',
		controller: function() {
			this.new_smth = {};

			this.addSmth = function(smth) {
				smth.info.push(this.new_smth);
				this.new_smth = {};
			};
		},
		controllerAs: 'smthCtrl'
	};
});