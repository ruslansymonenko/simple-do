export function getWeather () {
  

  fetch('http://api.weatherapi.com/v1/current.json?key=871d5f2d8cec481b898202849222605&q=Kiev&aqi=no', {
    method: "GET"
  })
    .then((response) => {return response.json()})
    .then(data => console.log(data))
}