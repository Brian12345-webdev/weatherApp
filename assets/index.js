var geoCode = getGeoCode
var fiveDayForecast = document.querySelector('.five-day')
var cityButton = document.querySelector('#btn btn-primary')

function getFiveDayWeather(data) {
  console.log(data)

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=c5d423c4815b48e87a0ce37757048cf1`)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      fiveDayForecastCards(data);
    })
}

function currentWeather(data){
  var lat = data[0].lat
  var lon = data[0].lon
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c5d423c4815b48e87a0ce37757048cf1&units=imperial`)

  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}

function getGeoCode(cityName) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=c5d423c4815b48e87a0ce37757048cf1`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getFiveDayWeather(cityName);
      currentWeather(data)
    });
}

function search() {
  this.getFiveDayWeather(document.querySelector("#search-bar").value);
  console.log(value);
};

document.querySelector("#search-bar").addEventListener("click", function () {
  console.log(document.querySelector("#text-input").value)
  document.querySelector("#text-input").value;
  getFiveDayWeather(document.querySelector("#text-input").value);
  getGeoCode(document.querySelector("#text-input").value);
});

document.querySelector("#search-bar").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getCurrentWeather.search();
  }

  document.querySelector(".card").addEventListener("click", function (event) {
    getCurrentWeather.search
  });

});

function fiveDayForecastCards () {
  //  for (var i = 0; i < 5; i++) {
  //   var fiveDay = document.createElement('#five-day')
  //   getFiveDayWeather.append(fiveDay);
  //   }
}

// function currentCity () {
 // var currentCity = document.createElement("#current-city");




