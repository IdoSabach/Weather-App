import getData from "./weather";

function view(city) {
  getData(city); // Replace 'London' with the desired city name
}

export {view} ;
