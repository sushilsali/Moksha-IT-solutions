var app= angular.module("app",["ngRoute","ngAnimate"]);
app.config(function($routeProvider){

$routeProvider.when("/home",{
	templateUrl:"Templates/home.html",
	controller:"homeController"
}).when("/journey",{
 
   templateUrl:"Templates/aboutus.html",

}).when("/contact",{
 
   templateUrl:"Templates/contact.html",
   controller:"mapController"


}).otherwise({
	templateUrl:"Templates/home.html",
	controller:"homeController"
})



})

app.controller("homeController",function($scope){

	$scope.test=function(){

  angular.element('#about').triggerHandler('click');
	};
})

app.controller("mapController",function($scope){

var myCenter = new google.maps.LatLng(41.878114, -87.629798);

 var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };


  $scope.map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

 $scope.marker = new google.maps.Marker({
  position:myCenter
  });

$scope.marker.setMap($scope.map);
})