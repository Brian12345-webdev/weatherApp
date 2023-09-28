var geoCode = getGeoCode
var fiveDayForecast = document.querySelector('.five-day')
var cityButton = document.querySelector('#btn btn-primary')
function getCurrentWeather(data) {
var lat = data[0].lat
var lon = data[0].lon

  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=lat&lon=lon&appid=c5d423c4815b48e87a0ce37757048cf1")
  
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        cityButton = document.createElement('button');
        console.log(cityButton)
}})
}

function getGeoCode() {
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=Shreveport&appid=c5d423c4815b48e87a0ce37757048cf1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getCurrentWeather(data);
    });
}

getGeoCode()


