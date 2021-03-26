<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Forecast</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/c70c4bc8ba.js"
      crossorigin="anonymous"
    ></script>

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="style.css" class="css" />
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h1>Weather Forecast</h1>
          <form>
            <input
              type="text"
              placeholder="Enter a city"
              size="30"
              id="city-input"
            />
            <input type="submit" value="Search" />
            <input type="submit" value="Current" id="current-location" />
          </form>
          <hr />
          <div class="row">
            <div class="col-6">
              <h2 id="city">Paris</h2>
              <span class="date-time">
                <span id="day">Monday</span>
                <span class="hour-minutes">
                  <span id="hour">14</span>:<span id="minutes">00</span></span
                ></span
              >
              <br />
              <span id="weather">Sunny</span>
              <br />
              <span class="humidity">
                Humidity: <span id="humid">0</span> %</span
              >
              <br />
              <span class="wind"> Wind: <span id="wind">0</span> km/h </span>
            </div>
            <div class="col-6">
              <h2 class="main-temp">
                <span id="temp">19</span>
                <span id="CF">
                  <span id="celcius"><a href="#">°C</a></span> |
                  <span id="fahrenheit"><a href="#">°F</a></span>
                </span>
              </h2>
              <i class="fas fa-cloud-sun"></i>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col">
              <p class="day">Tuesday</p>
              <i class="fas fa-sun"></i>
              <p class="temp">20°</p>
            </div>
            <div class="col">
              <p class="day">Wednesday</p>
              <i class="fas fa-cloud"></i>
              <p class="temp">15°</p>
            </div>
            <div class="col">
              <p class="day">Thursday</p>
              <i class="fas fa-sun"></i>
              <p class="temp">18°</p>
            </div>
            <div class="col">
              <p class="day">Friday</p>
              <i class="fas fa-sun"></i>
              <p class="temp">19°</p>
            </div>
            <div class="col">
              <p class="day">Saturday</p>
              <i class="fas fa-cloud-showers-heavy"></i>
              <p class="temp">13°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="/Users/mylene.covalcique/Desktop/SheCodes/Plus Workshops/indexJS.js"></script>
  </body>
</html>
