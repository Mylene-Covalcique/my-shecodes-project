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
hourEdit.innerHTML = `${hour}`;

let minuteEdit = document.querySelector("#minutes");
let minute = now.getMinutes();
minuteEdit.innerHTML = `${minute}`;

if (hour < 10) {
  hourEdit.innerHTML = `0${hour}`;
}

if (minute < 10) {
  minuteEdit.innerHTML = `0${minute}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function showTemperature(response) {
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;

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

  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "b57c2e5547d81a590a03baa24d71677e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
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

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `<div class="col-2">
              <div class="weather-forecast-date">
                <p class="day">${formatDay(forecastDay.dt)}</p>
              </div>
              <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
              <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temp-max">${Math.round(
              forecastDay.temp.max
            )}°</span>
                <span class="weather-forecast-temp-min">${Math.round(
                  forecastDay.temp.min
                )}°</span>
              </div> </div>
              `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "b57c2e5547d81a590a03baa24d71677e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

search("Paris");
