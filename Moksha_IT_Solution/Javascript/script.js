var app= angular.module("app",["ngRoute","ngAnimate"]);
app.config(function($routeProvider){

$routeProvider.when("/home",{
	templateUrl:"Templates/home.html",
	controller:"homeController"
}).when("/journey",{
 
   templateUrl:"Templates/aboutus.html",

}).when("/contact",{
 
   templateUrl:"Templates/contact.html",


}).otherwise({
	templateUrl:"Templates/home.html",
	controller:"homeController"
})



})

app.controller("homeController",function($scope){})