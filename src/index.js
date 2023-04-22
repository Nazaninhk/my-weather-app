let now = new Date();
let hours = now.getHours();
let minute = now.getMinutes();
let dayNumber = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[dayNumber];
let temp = document.querySelector("#dayTime");
temp.innerHTML = `${day} ${hours}:${minute}`;

function showCityInfo(response) {
  let h1 = document.querySelector("#currentCityName");
  h1.innerHTML = response.data.name;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  let temp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}°C`;
  let humid = document.querySelector("#humidity");
  humid.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed} km/h`;
}

function cityUrl(key) {
  event.preventDefault();

  let city = document.querySelector("#input-City").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a96b8e42edf83dc1f3db15911c229c79&units=metric`;
  axios.get(apiUrl).then(showCityInfo);
}

let form = document.querySelector("#SearchCity");
form.addEventListener("click", cityUrl);

function showData(response) {
  let apiKey = "a96b8e42edf83dc1f3db15911c229c79";
  let lat = response.coords.latitude;
  let long = response.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityInfo);
}

function currentLocation(urllocation) {
  navigator.geolocation.getCurrentPosition(showData);
}

let current = document.querySelector("#location");
current.addEventListener("click", currentLocation);
