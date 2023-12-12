export default function updateClock () {
  const clockElement = document.getElementById('clock')
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  clockElement.textContent = formattedTime
}

function formatTime (time) {
  return time < 10 ? `0${time}` : time
}
