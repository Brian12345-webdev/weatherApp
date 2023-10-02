var geoCode = getGeoCode
var fiveDayForecast = document.querySelector('.five-day')
var cityButton = document.querySelector('#btn btn-primary')


function getCurrentWeather(data) {
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



function getGeoCode() {
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=Shreveport&appid=c5d423c4815b48e87a0ce37757048cf1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getCurrentWeather(data);
    });
}



function search() {
  this.getCurrentWeather(document.querySelector("#search-bar").value);
  console.log(value);
};

document.querySelector("#search-bar").addEventListener("click", function () {
  console.log(document.querySelector("#text-input").value)
  document.querySelector("#text-input").value
  getCurrentWeather(document.querySelector("#text-input").value);
});

document.querySelector("#search-bar").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getCurrentWeather.search();
  }

  document.querySelector(".card").addEventListener("click", function (event) {
    getCurrentWeather.search
  });

  

});

function fiveDayForecastCards (forecast) {
  console.log(forecast);
   for (var i = 0; i < 5; i++) {
    getCurrentWeather.applyWeather('#card');
    }
}

getGeoCode()


