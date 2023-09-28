var geoCode = getGeoCode
// 
function getCurrentWeather(data) {
    console.log(data);
    //fetch("https://api.openweathermap.org/data/2.5/forecast?q=' + geoCode + '&appid=c5d423c4815b48e87a0ce37757048cf1")
    //     .then(function (response) {
    //         return response.json;
    //     })
}

//     .then(function (data) {

//     })

  function getGeoCode(){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=Shreveport&appid=c5d423c4815b48e87a0ce37757048cf1")
    .then(function (response) {
        return response.json();
  })
  .then(function (data) {
    getCurrentWeather(data);});
  }

  getGeoCode() //
