// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");
// const minTemp = document.querySelector("#pressure");
const windSpeed = document.querySelector("#speed");

let temp = currentTemp;
let wSpeed = windSpeed;
let humi = humidity;

// var windChill =
//     35.74 +
//     0.6215 * temp -
//     35.75 * Math.pow(wSpeed, 0.16) +
//     0.4275 * temp * Math.pow(wSpeed, 0.16);
// var windChill = Math.round(windChill);
// document.getElementById("windChill").innerHTML = windChill;

const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Bethesda&units=imperial&appid=1c46ab2790dbd1be365348f91b70dda1";

apiFetch(url);

async function apiFetch(apiURL) {
    const response = await fetch(apiURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
        0
    )}</strong>`;
    humidity.innerHTML = weatherData.main.humidity.toFixed(0);
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(2);
    // minTemp.innerHTML = weatherData.main.temp_min.toFixed(1);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc.toUpperCase();
}

// Last Modified time on page
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
