const addHistory = (command) => {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(command);
  localStorage.setItem("history", JSON.stringify(history));
  render(command, false);
  render("<br />", false);
  input.focus();
};

const render = (text, needsMarkup = true) => {
  if (needsMarkup) {
    output.innerHTML += `<p>${text}</p>`;
  } else {
    output.innerHTML += text;
  }
  output.scrollTop = output.scrollHeight;
  input.focus();
};

const error = (color, type, message) => {
  render(`<p><span class="${color}">${type}</span>: ${message}</p>`);
};

const getWeather = () => {
  let cached = false;
  // let cached = localStorage.getItem("cachedWeather");
  if (cached) {
    return JSON.parse(cached);
  } else {
    let loc = localStorage.getItem("loc");
    let WEATHER_API_KEY = localStorage.getItem("WEATHER_API_KEY");
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${WEATHER_API_KEY}`
    )
      .then((geoRes) => geoRes.json())
      .then((geoData) => {
        fetch(``)
          .then((weatherRes) => weatherRes.json())
          .then((weatherData) => {
            console.log(weatherData);
            console.log(geoData);
            let weather = data.weather[0].main;
            let temp = data.main.temp;
            let city = data.name;
            let country = data.sys.country;
            let humidity = data.main.humidity;
            let wind = data.wind.speed;
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let time = date.getHours() + ":" + date.getMinutes();
            let dateString = `${day}/${month}/${year} ${time}`;
            let cacheData = {
              weather,
              temp,
              city,
              country,
              humidity,
              wind,
              dateString,
            };
            localStorage.setItem("cachedWeather", JSON.stringify(cacheData));
          })
          .catch((e) => {
            error("red", "Weather API Error", e);
            console.log(e);
          });
      })
      .catch((e) => {
        error("red", "Weather API Error", e);
        console.log(e);
      });
  }
};

const getDate = () => {};

const dateDiffInMinutes = (a, b) => {
  const _MS_PER_MIN = 1000 * 60;
  let res = Math.floor((b - a) / _MS_PER_MIN);
  console.log(res);
  return res;
};

export { addHistory, render, error, getWeather, getDate, dateDiffInMinutes };
