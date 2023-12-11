const getData = async (city) => {
  const apiKey = "9f434f090aae3ae45437f86f5ecd2a92";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
  const res = await fetch(`${apiUrl}&appid=${apiKey}`, { mode: "cors" });

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}`);
    return;
  }

  let data = await res.json();

  const myData = {
    name: data.name,
    temp: data.main.temp,
    wind: data.wind.speed,
    humidity:data.main.humidity,
    feelLike:data.main.feels_like,
  };

  console.log(myData);
  console.log(data);
  console.log(myData.feelLike);
};

export default getData;
