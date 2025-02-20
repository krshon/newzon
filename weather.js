document.addEventListener("DOMContentLoaded", () => {
    async function getWeather(lat = null, lon = null) {
        const apiKey = "YOUR_WEATHERAPI_KEY";
        let location = lat && lon ? `${lat},${lon}` : "Jaipur,India";  // Default to Jaipur if geolocation fails

        try {
            let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
            let data = await response.json();
            console.log("Weather API Response:", data);

            document.getElementById("weather-widget").innerHTML = `
                <div id="weather">
                    <h3>${data.location.name}, ${data.location.region}</h3>
                    <p>${data.current.condition.text}</p>
                    <p>${data.current.temp_c}°C</p>
                </div>
            `;
        } catch (error) {
            console.error("Weather API Error:", error);
            document.getElementById("weather-widget").innerText = "Failed to load weather.";
        }
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("User Location:", lat, lon);
            getWeather(lat, lon);
        },
        () => {
            console.warn("Geolocation blocked. Using default city.");
            getWeather();  // Use Jaipur as default
        }
    );
});
