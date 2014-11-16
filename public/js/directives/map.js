app.directive('smthMap', function(){  
	return {
	    restrict: 'E',
	    templateUrl: 'views/mapView.html',
		controller:function($scope){
			$scope.map = { 
				center: { latitude: 45, longitude: -73 }, 
				zoom: 8 
			};
		},
		controllerAs: 'panels'
	};
});