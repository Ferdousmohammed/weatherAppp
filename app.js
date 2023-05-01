
// const apikey = "d2ed57b8528b179c758b25ddb0e56fd6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Rome";

// async function checkWeather() {
//     const response = await fetch(apiUrl + `&appid=${apikey}`);
//     var data = await response.json();
//     console.log(data);
    
//  }
//  checkWeather()
//  document.querySelector(".city").innerHTML = data.name;
//  document.querySelector(".temp").innerHTML = data.main.temp;
//  document.querySelector(".humidity").innerHTML = data.main.humidity;
//  document.querySelector(".wind").innerHTML = data.wind.speed;

// Define API key
const apiKey = "d2ed57b8528b179c758b25ddb0e56fd6";

// Function to fetch weather data
function searchTemperature() {
  const cityName = document.getElementById("city-name").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp.toFixed(2);
      const icon = data.weather[0].icon;
      const condition = data.weather[0].main;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.querySelector(".temp").textContent = temp;
      document.querySelector("#condition").textContent = condition;
      document.querySelector(".city").textContent = cityName;
      document.querySelector(".humidity").textContent = `${humidity}%`;
      document.querySelector(".wind").textContent = `${windSpeed}m/s`;
      document.querySelector(
        "#weather-icon"
      ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    })
    .catch((error) => {
      console.log(error);
    });
}

 