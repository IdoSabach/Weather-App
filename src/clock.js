// export default function updateClock() {
//   const clockElement = document.getElementById("clock");
//   const currentTime = new Date();
//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();

//   const formattedTime = `${formatTime(hours)}:${formatTime(
//     minutes
//   )}:${formatTime(seconds)}`;
//   clockElement.textContent = formattedTime;
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// export default function setTime(time) {
//   const clockElement = document.getElementById("clock");
//   const timeNow = time;
//   const currentTimestamp = new Date(timeNow * 1000);

//   const hours = currentTimestamp.getUTCHours().toString().padStart(2,0);
//   const minutes = currentTimestamp.getUTCMinutes().toString().padStart(2,0);
//   const seconds = currentTimestamp.getUTCSeconds().toString().padStart(2,0);

//   clockElement.textContent = `${hours}:${minutes}:${seconds}`

//   console.log(clockElement.textContent)
// }
