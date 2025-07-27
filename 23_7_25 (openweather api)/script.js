const apiKey = 'Your_API_Key';

//defining variables
const Form = document.getElementById('Form');
const cityIn = document.getElementById('city');
const Result = document.getElementById('Result');

//adds submit event with form element
Form.addEventListener('submit', async (e) => {
  e.preventDefault();           //to block reloading of page after form-submission
  const city = cityIn.value;      //reads user input from user
  if (!city) return;               //check empty form submission
  Result.innerHTML = "Loading...";   
  //generates API URL dynamically
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res1 = await fetch(url);      // fetches data from API
  
    if (!res1.ok) {
      throw new Error("City not found"); //checks for errors
    }
  
    const currentWeather = await res1.json();      // changes response returned from fetch to json

    //reorganizes values from json
    const name = currentWeather.name;
    const temp = currentWeather.main.temp;
    const humidity = currentWeather.main.humidity;
    const weather = currentWeather.weather;
    const speed = currentWeather.wind.speed;
    const iconCode = weather[0].icon;       
    const description = weather[0].description;
  
    //manipulates DOM
    Result.innerHTML = `
      <h2>${name}</h2>
      <img class="icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${description}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${speed} m/s</p>
    `;

  
  }
  catch (err) {
    Result.innerHTML = `<span style="color:red;">City not found. Please try again.</span>`; //error message in case of failure of API fetch
  }
  
});
