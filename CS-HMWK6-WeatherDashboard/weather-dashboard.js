$(document).ready(function () {

    var apiKey = "5f018959489e9fac40ea7e3b5269f86a";
    var pastCities = [];
    var cityInput = $("#city-input-form").val().trim();
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey + "&units=imperial"; // Last part for getting Fahreinheit temps

    $("#city-search-button").on("click", function() {
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function (response){
        console.log(response)
          }) }) })