



var doweather = function() {
    clean_buttons();
    document.getElementById('weather').classList.add("selected");
    var workspace = document.getElementById("content");
    workspace.innerHTML = "";

    var h1 = document.createElement('h1');
    var text = document.createTextNode("Gianni's Weather Tracker");
    h1.appendChild(text);
    workspace.append(h1);

    var h3 = document.createElement('h3');
    text = document.createTextNode("Track weather by entering in a Zip Code, City Name, or GPS!");
    h3.appendChild(text);
    workspace.appendChild(h3);

    var btn = document.createElement("button");
    var winfo = document.createElement("div")
    var txtbox = document.createElement("input")
    txtbox.setAttribute("id","weatherq");
    txtbox.setAttribute("placeholder","Enter a city or zip...")
    winfo.setAttribute("id","weatherdata");
    btn.innerHTML = "Go!";

    btn.onclick = getWeatherInfo;

    workspace.appendChild(txtbox);
    workspace.appendChild(btn);
    workspace.appendChild(winfo);

alert('here1');


}



function getWeatherInfo() {
    
    const WEATHER_API_KEY = "c6804f63d6da4c7e729a649e4d60a268";
    var val = document.getElementById("weatherq").value;

    alert('here2');
    if (val === "") { //Check for empty string, if empty provide error message
        var e = document.createElement('p');
        e.html("Can't search for empty string");
        return;

    }
    if (isNaN(val)) { //If value is not a number, call weather API by CITY
        console.log("CITY Detected");
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + val + "&units=imperial&appid=" + WEATHER_API_KEY;
        fetchRequest(url, onWeatherSuccess, onWeatherFail);

    }
    else { //ELSE CALL BY ZIP CODE
        console.log("ZIP Detected");
        var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + val + "&units=imperial&appid=" + WEATHER_API_KEY;
        fetchRequest(url, onWeatherSuccess, onWeatherFail);
    }

}


function addWeatherContent(element) {
    var r = $("weatherdata");
    r.append(element);
}

function resetWeatherContent() {
    var r = $("weatherdata");
    r.html("");
}


function fetchRequest(url, onSuccess, onFailure) {
    fetch(url)
        .then(function (response) {
            console.log(response);
            response.json()
                .then(function (value) {
                    console.log(value);
                    onSuccess(value);
                })
                .catch(function (error) {
                    console.log("error: ", error);
                    alert("Something went wrong. Google how to open the DevTools console");
                    onFailure(error);
                })
        })
        .catch(function (error) {
            console.log("error: ", error);
            alert("Something went wrong. Google how to open the DevTools console");
            onFailure(error);
        });
}

function onWeatherSuccess(data) {
    $("#weatherdata").empty();
    $("#txtbox").val("");
    $("#txtbox").focus();

    var line1 = "Weather for: " + data.name;
    var line2 = "Temperature: " + Math.round(data.main.temp * 10) / 10 + " °F";
    var line3 = "Ambient Tempature Feel: " + Math.round(data.main.feels_like * 10) / 10 + " °F";
    var line4 = "Temp Max of the Day: " + data.main.temp_max + " °F";
    var line5 = "Temp Min of the Day: " + data.main.temp_min + " °F";
    var line6 = "Ambient Pressure: " + data.main.pressure + " Pa";
    var line7 = "Humidity: " + data.main.humidity + " %";
    var line8 = "Wind Speed Outside: " + data.wind.speed + " Knots";
    var line9 = "Wind Direction: " + data.wind.deg + " (in degrees)";
    var line10 = "Visibility Outside: " + data.visibility + "ft";
    var line11 = "Sunset: " + "6:56" + " PM";
    var ele1 = $('<p></p>');
    var ele2 = $('<p></p>');
    var ele3 = $('<p></p>');
    var ele4 = $('<p></p>');
    var ele5 = $('<p></p>');
    var ele6 = $('<p></p>');
    var ele7 = $('<p></p>');
    var ele8 = $('<p></p>');
    var ele9 = $('<p></p>');
    var ele10 = $('<p></p>');
    var ele11 = $('<p></p>');
    ele1.text(line1);
    ele2.text(line2);
    ele3.text(line3);
    ele4.text(line4);
    ele5.text(line5);
    ele6.text(line6);
    ele7.text(line7);
    ele8.text(line8);
    ele9.text(line9);
    ele10.text(line10);
    ele11.text(line11);
    addWeatherContent(ele1);
    addWeatherContent(ele2);
    addWeatherContent(ele3);
    addWeatherContent(ele4);
    addWeatherContent(ele5);
    addWeatherContent(ele6);
    addWeatherContent(ele7);
    addWeatherContent(ele8);
    addWeatherContent(ele9);
    addWeatherContent(ele10);
    addWeatherContent(ele11);
    resetMapContent();
    var mapp = new Gmap(data.coord.lat, data.coord.lon, 12, 300, 300);
    addMapContent(mapp);
}

function onWeatherSuccessNoMap(data) {
    var line1 = "Weather for " + data.name;
    var line2 = "Temperature " + data.main.temp + "°F";
    var line3 = "Ambient Tempature Feel: " + data.main.feels_like + " °F";
    var line4 = "Temp Max of the Day: " + data.main.temp_max + " °F";
    var line5 = "Temp Min of the Day: " + data.main.temp_min + " °F";
    var line6 = "Ambient Pressure: " + data.main.pressure + " Pa";
    var line7 = "Humidity: " + data.main.humidity + " %";
    var line8 = "Wind Speed Outside: " + data.wind.speed + " Knots";
    var line9 = "Wind Direction: " + data.wind.deg + " (in degrees)";
    var line10 = "Visibility Outside: " + data.visibility + "ft";
    var line11 = "Sunset: " + "6:56" + " PM";
    var ele1 = $('<p></p>');
    var ele2 = $('<p></p>');
    var ele3 = $('<p></p>');
    var ele4 = $('<p></p>');
    var ele5 = $('<p></p>');
    var ele6 = $('<p></p>');
    var ele7 = $('<p></p>');
    var ele8 = $('<p></p>');
    var ele9 = $('<p></p>');
    var ele10 = $('<p></p>');
    var ele11 = $('<p></p>');
    ele1.text(line1);
    ele2.text(line2);
    ele3.text(line3);
    ele4.text(line4);
    ele5.text(line5);
    ele6.text(line6);
    ele7.text(line7);
    ele8.text(line8);
    ele9.text(line9);
    ele10.text(line10);
    ele11.text(line11);
    addWeatherContent(ele1);
    addWeatherContent(ele2);
    addWeatherContent(ele3);
    addWeatherContent(ele4);
    addWeatherContent(ele5);
    addWeatherContent(ele6);
    addWeatherContent(ele7);
    addWeatherContent(ele8);
    addWeatherContent(ele9);
    addWeatherContent(ele10);
    addWeatherContent(ele11);

}

function onWeatherFail(status) {
    document.getElementById("weatherq").empty();
    resetMapContent();
    txtbox.val = ("");
    txtbox.focus();
    alert("Failed to get weather on Code " + toString(status));
}


//Getting location was successful, make a new Gmap element and add it to the content after resetting the content.
function onLocationSuccess(p) {
    resetMapContent();
    addMapContent(new Gmap(p.coords.latitude, p.coords.longitude, 14, 300, 300));
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + p.coords.latitude.toString() +
        "&lon=" + p.coords.longitude.toString() + "&units=imperial&appid=" + WEATHER_API_KEY;
    fetchRequest(url, onWeatherSuccessNoMap, onWeatherFail);

};

function onLocationError(e) {
    alert("Error getting location");
}




