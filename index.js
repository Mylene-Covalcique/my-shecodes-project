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
dayEdit.innerHTML = `<strong>${day}</strong>`;

let hourEdit = document.querySelector("#hour");
let hour = now.getHours();
hourEdit.innerHTML = `<strong>${hour}</strong>`;
if (hour < 10) {
  hour = `0${hour}`;
}

let minuteEdit = document.querySelector("#minutes");
let minute = now.getMinutes();
minuteEdit.innerHTML = `<strong>${minute}</strong>`;
if (minute < 10) {
  minute = `0${minute}`;
}

function showTemperature(response) {
  console.log(response.data);
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

//let currentButton = document.querySelector("#current-location");
//currentButton.addEventListener("click", handleCurrentPosition);

//function handleClickCF() {
//  let convert = document.querySelector("#temp");
//  convert.innerHTML = "66";
//}

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", handleClickCF);

//function handleClickFC() {
//  let convertion = document.querySelector("#temp");
// convertion.innerHTML = "19";
//}

//let celcius = document.querySelector("#celcius");
//celcius.addEventListener("click", handleClickFC);
