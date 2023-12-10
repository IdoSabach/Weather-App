

const getData = async () => {
  const apiKey = "9f434f090aae3ae45437f86f5ecd2a92";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=yeruham"
  const res = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await res.json();

  console.log(data);

  console.log(data.main.temp);

  return data
};

export default getData;