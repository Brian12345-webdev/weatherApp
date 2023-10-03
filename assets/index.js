var geoCode = getGeoCode
var fiveDayForecastEl = document.querySelector('#five-day');
var cityButtonEl = document.querySelector('.btn btn-primary');

function getFiveDayWeather(data) {

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=c5d423c4815b48e87a0ce37757048cf1`)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayFiveDayForecast(data);
    })
}

function currentWeather(data) {
  var lat = data[0].lat
  var lon = data[0].lon
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c5d423c4815b48e87a0ce37757048cf1&units=imperial`)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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

function displayFiveDayForecast(forecast) {
  fiveDayForecastEl.textContent = forecast
  for (var i = 0; i < 5; i++) {

    var weather = document.createElement("div");
    weather.classList = 'list-item flex-row justify-space-between align center';

    var fiveDays = document.createElement("span");

    weather.appendChild(fiveDays);

    fiveDayForecastEl.appendChild(weather);
  }
}

// function currentCity () {
// var currentCity = document.createElement("#current-city");




// cityButtonEl.addEventListener("click", function (event) {
  //   var city = document.createElement("div");
  //  
// });


