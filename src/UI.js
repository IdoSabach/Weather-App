export default function view(data) {
  document.querySelector(".city").textContent = data.name
  document.querySelector(".temp").textContent = data.temp
  document.querySelector(".feels-like").textContent = ` FEELS LIKE: ${data.feelLike}`
  document.querySelector(".humidity").textContent = ` HUMIDITY: ${data.humidity} %`
  document.querySelector(".wind").textContent = ` WIND: ${data.wind} km/h`
}



