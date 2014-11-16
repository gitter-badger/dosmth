$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  var latlng = new google.maps.LatLng(43.4822185,-80.5467194);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 15
  };
  
  var marker = new google.maps.Marker({
    draggable: true,
    position: latlng,
    url: '/#',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "simplified" }
    ]
  }];

  map.setOptions({styles: styles});

  marker.setMap(map);

};
/* end google maps -----------------------------------------------------*/
});