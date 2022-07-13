// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// weather api for the chamber page
const maxTemp = document.querySelector('#temp_max');
const minTemp = document.querySelector('#temp_min');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=1c46ab2790dbd1be365348f91b70dda1';

apiFetch(url);

async function apiFetch(url) {
  
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
}



function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;


  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc.toUpperCase();
  }

