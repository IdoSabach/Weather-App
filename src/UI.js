export default function view (data) {
  document.querySelector('.city').textContent = `${data.name}, ${data.country}`
  document.querySelector('.temp').textContent = `${data.temp} °C`
  document.querySelector('.feels-like').textContent = ` FEELS LIKE: ${data.feelLike} °C`
  document.querySelector('.humidity').textContent = ` HUMIDITY: ${data.humidity} %`
  document.querySelector('.wind').textContent = ` WIND: ${data.wind} km/h`
}
