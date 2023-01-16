export function getWeather () {
  const weatherDescrContainer = document.querySelector('.header-info__weather-descr');
  const temperatureContainer = document.querySelector('.header-info__weather-temperature');
  const cityContainer = document.querySelector('.header-info__weather-city');
  const weatherImg = document.querySelector('.header-info__weather-img');

  fetch('http://api.weatherapi.com/v1/current.json?key=871d5f2d8cec481b898202849222605&q=Kiev&aqi=no', {
    method: "GET"
  })
    .then((response) => {return response.json()})
    .then(data => {
      let temperature = parseInt(data.current.temp_c);
      console.log('get weather')

      cityContainer.textContent = data.location.name;
      temperatureContainer.textContent = `${Math.round(temperature)} C`;
      weatherDescrContainer.textContent = data.current.condition.text;
      weatherImg.setAttribute('src', `${data.current.condition.icon}`)
    })
}