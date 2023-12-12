import view from "./UI";

async function getData(city) {
  const apiKey = "9f434f090aae3ae45437f86f5ecd2a92";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

  let myData;

  try {
    const res = await fetch(`${apiUrl}&appid=${apiKey}`, { mode: "cors" });

    if (!res.ok) {
      console.error(`Failed to fetch data. Status: ${res.status}`);
      alert('Wrong country name')
      return;
    }

    const data = await res.json();

    myData = {
      name: data.name,
      temp: data.main.temp,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      feelLike: data.main.feels_like,
    };

    view(myData)

  } catch (error) {
    console.error(error);
    
  }

  // return myData;
}

export default getData;



// document.querySelector(".city").textContent = data.name
    // document.querySelector(".temp").textContent = data.main.temp
    // document.querySelector(".feels-like").textContent = ` FEELS LIKE: ${data.main.feels_like}`
    // document.querySelector(".humidity").textContent = ` HUMIDITY: ${data.main.humidity} %`
    // document.querySelector(".wind").textContent = ` WIND: ${data.wind.speed} km/h`