var searchTable = document.querySelector('.search-table');

fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={c5d423c4815b48e87a0ce37757048cf1}", {
})
    .then(function (response) {
        return response.json;
    })

    .then(function (data) {
        console.log(data);
    })