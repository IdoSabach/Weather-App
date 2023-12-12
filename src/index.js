import getData from "./weather";

getData('tel aviv')
const form = document.querySelector('.input-text')
form.value = 'Tel Aviv'
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click',function(e){
  e.preventDefault()
  const city = form.value
  getData(city)

  form.value = ""
})



