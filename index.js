let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayEdit = document.querySelector("#day");
let day = days[now.getDay()];
dayEdit.innerHTML = `${day}`;

let hourEdit = document.querySelector("#hour");
let hour = now.getHours();
if (hour < 10) {
  hourEdit.innerHTML = `0${hour}`;
}

let minuteEdit = document.querySelector("#minutes");
let minute = now.getMinutes();
if (minute < 10) {
  minuteEdit.innerHTML = `0${minute}`;
}

function showTemperature(response) {
  console.log(response.data);
  celsiusTemperature = response.data.main.temp;
  let currentTemp = Math.round(response.data.main.temp);
  let changeTemp = document.querySelector("#temp");
  changeTemp.innerHTML = currentTemp;
  let currentHumidity = Math.round(response.data.main.humidity);
  let changeHumidity = document.querySelector("#humid");
  changeHumidity.innerHTML = currentHumidity;
  let currentWind = Math.round(response.data.wind.speed);
  let changeWind = document.querySelector("#wind");
  changeWind.innerHTML = currentWind;
  let currentWeather = response.data.weather[0].description;
  let changeWeather = document.querySelector("#weather");
  changeWeather.innerHTML = currentWeather;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  currentCity.innerHTML = cityInput.value;

  let apiKey = "b57c2e5547d81a590a03baa24d71677e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleCurrentPosition(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityCurrentButton = document.querySelector("#city");
  let changeTempCurrentCity = document.querySelector("#temp");
  cityCurrentButton.innerHTML = response.data.name;
  changeTempCurrentCity.innerHTML = temperature;
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b57c2e5547d81a590a03baa24d71677e";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleCurrentPosition);
}
navigator.geolocation.getCurrentPosition(getPosition);

function displayTempInF(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayTempInF);

function displayTempInC(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayTempInC);
