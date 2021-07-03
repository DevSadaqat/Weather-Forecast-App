// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });

    $scope.submit = function() {
        $location.path('/forecast');
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', 
function($scope, cityService) {
    
    $scope.city = cityService.city;
    $scope.id = cityService.id;

    $scope.convertToDate = function(dt){
        return new Date(dt*1000);
    }

    console.log($scope.weatherResult);
}]);