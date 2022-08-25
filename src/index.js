let now = new Date();
let h2 = document.querySelector("h2");
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hour}:${minutes}`;

function enterCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let saerchInput = document.querySelector("#city-search");
  h1.innerHTML = saerchInput.value;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", enterCity);

function celsiusConvertation(event) {
  event.preventDefault();
  let currentCelsius = document.querySelector("#current-temperature");
  currentCelsius.innerHTML = `${defaultTemperature}`;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsiusConvertation);
let defaultTemperature = [19];

function fahrenheitConvertation(event) {
  event.preventDefault();
  let currentFahrenheit = document.querySelector("#current-temperature");
  currentFahrenheit.innerHTML = `${Math.round(
    defaultTemperature * (9 / 5) + 32
  )}`;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheitConvertation);

// week5
function showWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity ${response.data.main.humidity} %`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchNewCity(city) {
  let apiKey = "c1b6dbd5f5a0d88ca364829bf8480754";
  let unit = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data";
  let apiUrl = `${apiEndPoint}/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchNewCity(city);
}
let form = document.querySelector("form");
form.addEventListener("submit", submitCity);
searchNewCity("Rivne");
///////

function showCurrentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "c1b6dbd5f5a0d88ca364829bf8480754";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showWeather);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

let button = document.querySelector("#current-button");
button.addEventListener("click", getCurrentPosition);
