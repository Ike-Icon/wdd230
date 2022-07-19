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

// Last Modified time on page #############
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// fetching temple list from a json file  #############
const display = document.querySelector("article");

// JSon fetch file for directory page

const requestURL =
    "https://zeus-max-code.github.io/wdd230/final-project/js/templeList.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const templeList = jsonObject["temples"];
        templeList.forEach(displaytempleList);
    });

function displaytempleList(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let h3 = document.createElement("h3");
    let contact = document.createElement("p");
    let appointment = document.createElement("a");
    let address = document.createElement("p");
    let closureSchedule = document.createElement("p");
    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${temple.name} (${temple.address})`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", temple.image);
    portrait.setAttribute("alt", `image of ${temple.name} ${temple.address}`);
    portrait.setAttribute("loading", "lazy");
    contact.innerHTML = `<strong>Contact:</strong> ${temple.telephone}</strong>`;
    appointment.innerHTML = `<button><a href='${temple.appointment}'>Like</a></button>`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(appointment);
    card.appendChild(contact);
    card.appendChild(address);
    card.appendChild(closureSchedule);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
