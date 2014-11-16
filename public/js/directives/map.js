app.directive('smthMap', function(){  
	return {
	    restrict: 'E',
	    templateUrl: 'views/mapView.html',
		controller:function($scope){
			$scope.map = { 
				center: { 
					latitude: 43.4822200, 
					longitude: -80.5467194
				}, 
				zoom: 13 
			};
		},
		controllerAs: 'panels'
	};
});