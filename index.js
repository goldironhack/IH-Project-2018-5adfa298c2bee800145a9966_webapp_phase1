var districtsPolygonsURL = "http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";

var map;
var ny_coordinates = {lat: 40.720610, lng: -73.995242};
var bro_coordinates = {lat: 40.5002, lng: -73.949997};
var ny_university = {lat: 40.729576, lng: -73.996481};
var ny_marker;
var bro_marker;
var directionsService;
var directionsRenderer;
var bermudaTriangle;

var triangleCoords = [
          {lat: 25.774, lng: -80.190},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757},
          {lat: 25.774, lng: -80.190}
        ];

/*
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        zoom : 10,
        center: ny_coordinates
    });
    ny_marker = new google.maps.Marker({
        position: ny_coordinates,
        map: map
    });
    bro_marker = new google.maps.Marker({
        position: bro_coordinates,
        map: map
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    markerEvents(bro_marker);
}
function markerEvents(marker){
    if(marker != "undefined"){
        marker.addListener("click",function(){
            getRoute();
        });
    }
}
function getRoute(){
    var request = {
        origin: ny_marker.position,
        destination: bro_marker.position,
        travelMode: 'DRIVING'
    };
    directionsRenderer.setMap(map);
    directionsService.route(request,function(result,status){
        if(status == "OK"){
            directionsRenderer.setDirections(result);
        }
    });
} */
/*
var request = new XMLHttpRequest();
request.open('GET', districtsPolygonsURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var districtsPolygons = request.response;

}*/


var districtsPolygonsDatasets = [];
function getDataFromURL(URL){
    var data = $.get(URL, function(){
      console.log(URL);
    })
    .done(function(){
console.log(data);
for (var i in data.responseText.id) {
  console.log(data.responseText.id[i]);
}

    })
    .fail( function(error){
      console.error(error);
    })
}
function updateAllDatasets(){
  getDataFromURL(districtsPolygonsURL);
}
$(document).ready( function(){
  $("#getDataButton").on("click", updateAllDatasets)
})



      function initMap() {
        //var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: ny_coordinates
        });
        var marker = new google.maps.Marker({
          position: ny_university,
          map: map
        });
      }


function drawPolygon(polygon){
    var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'RED',
          fillOpacity: 0.35
        });
    bermudaTriangle.setMap(Map);
}