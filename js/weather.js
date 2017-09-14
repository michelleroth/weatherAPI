$(document).ready(function() {
    console.log("weather ready");

    $.ajax({
        url: "http://api.wunderground.com/api/f2082046dd076caa/forecast10day/q/NY/Syracuse.json",
        type: "GET",
        format: "jsonp",
        success: function(data) {
            console.log(data);
            var forecast10 = data.forecast.simpleforecast.forecastday;

            for (var i = 0; i < forecast10.length; i++) {
                console.log(data.forecast.simpleforecast.forecastday[i].high.fahrenheit);
                var day = forecast10[i];

                console.log(day.high.fahrenheit);
                var dayHigh = day.high.fahrenheit;

                var forecastRow = '<div class="row forecast-content">' +
                    '<div class="col-xs-6 col-sm-3">' +
                    day.date.weekday +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-2">' +
                    '<img src="' + day.icon_url + '" alt="Icon image for ' + day.icon + '" />' +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-4">' +
                    day.conditions +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-3">' +
                    day.high.fahrenheit + " / " + day.low.fahrenheit + " &#176; F" +
                    '</div>' +

                    '</div>'; //row
                console.log(forecastRow)
                $(".forecast-results").append(forecastRow);

                // $("body").append("<h3>" + dayHigh + "</h3>");
            } //loop

        }, //suc funct

        error: function() {

        } //error

    }); //ajax method end works in the background while running

    //api middle man from server to another domain
    //json is my object/array of data response

}); //ready method end