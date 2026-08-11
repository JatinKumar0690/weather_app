const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input");
const weatherImg = document.querySelector(".img");
const temperature = document.querySelector(".temperature-text");
const descriptionText = document.querySelector(".description-text");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");

console.log(locationNotFound,weatherBody);


async function checkWeather (city) {
    const apiKey = "5e13c44d98687f9b5a0be49bca4dd363"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch (URL);
    const data = await response.json();


    if(data.cod === '404') {
    weatherBody.style.display = "none"
    locationNotFound.style.display = "flex"
    return;
}

weatherBody.style.display = "flex"
locationNotFound.style.display = "none"


    console.log(data);
    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    humidity.innerHTML = `Humidity ${data.main.humidity}%`;
    windSpeed.innerHTML = `wind speed ${data.wind.speed}Km/H`
    descriptionText.innerHTML = `${data.weather[0].description}`;

    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition === 'clouds') {
        weatherImg.src = 'cloud.png'
    } else if (weatherCondition === 'clear') {
        weatherImg.src = 'clear.png'
    } else if (weatherCondition === 'mist') {
        weatherImg.src = 'mist.png'
    } else if (weatherCondition === 'rain') {
        weatherImg.src = 'rain.png'
    } 
};



searchBtn.addEventListener("click", () => {
    checkWeather(input.value);
});
