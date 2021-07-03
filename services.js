// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Melbourne,3043,+61";
    //For making api request create your account on weather forecast api and put your id in the string.
    this.id = '';
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, id) {
    var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast", {
    callback: "JSON_CALLBACK" }, {get: { method: 'JSONP'}});
 
     return weatherAPI.get({q: city, appid: id});
 };
    
}]);

 