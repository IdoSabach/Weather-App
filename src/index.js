import getData from './weather'
// import setTime from './clock'
// import updateClock from './clock'

getData('tel aviv')
const form = document.querySelector('.input-text')
form.value = 'Tel Aviv'
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const city = form.value
  getData(city)

  form.value = ''
})


// setInterval(updateClock, 1000);
// updateClock()
// setInterval(() => getData(form.value), 1000); 


