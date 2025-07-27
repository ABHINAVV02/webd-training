## Weather App using OpenWeatherMap API

<img src="./weather-static.PNG" alt="Weather app" height="300px" width="50%" />
<img src="./weather-app.PNG" alt="Weather app" height="300px" width="50%" />

## Overview

A simple web app that fetches and displays current weather data for a city using the OpenWeatherMap API.

## Features

- Fetches and shows current temperature, humidity, wind speed, and weather description.
- Displays weather icons from OpenWeatherMap.
- User inputs city name via a form.
- Handles errors for invalid city names.

## Setup & Usage

1. Get an OpenWeatherMap API key from [https://openweathermap.org/api](https://openweathermap.org/api).
2. Insert your API key in the JavaScript code (`const apiKey = 'YOUR_API_KEY_HERE';`).
3. Open the `index.html` in a browser.
4. Enter a city name and submit to see the current weather.

## (Optional) 5-Day Forecast Method

- Fetch 5-day forecast data from OpenWeatherMap.
- Extract one forecast per day from the provided 3-hour interval data.
- Display daily temperature, weather icons, and descriptions dynamically.

## Testing

- Use browser Developer Tools (Console & Network tab) to inspect API requests and responses.
- Test with valid and invalid city names to verify correct data display and error handling.

---

Enjoy building your weather app!
