import getData from "./weather";

getData('yeruham')
const form = document.querySelector('.input-text')
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click',function(e){
  e.preventDefault()
  const city = form.value
  getData(city)
})
