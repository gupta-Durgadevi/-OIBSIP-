const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertBtn.addEventListener("click", function () {

    // Get input value
    const temperature = temperatureInput.value.trim();

    // Clear previous error
    errorMessage.textContent = "";

    // Check if input is empty
    if (temperature === "") {
        errorMessage.textContent = "Please enter a temperature value.";
        return;
    }

    // Convert input into a number
    const value = Number(temperature);

    // Check if input is a valid number
    if (isNaN(value)) {
        errorMessage.textContent = "Please enter a valid numeric value.";
        return;
    }

    // Get selected unit
    const unit = unitSelect.value;

    let celsius;
    let fahrenheit;
    let kelvin;

    // Celsius conversion
    if (unit === "celsius") {

        if (value < -273.15) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-273.15°C).";
            return;
        }

        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    }

    // Fahrenheit conversion
    else if (unit === "fahrenheit") {

        if (value < -459.67) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-459.67°F).";
            return;
        }

        fahrenheit = value;
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }

    // Kelvin conversion
    else if (unit === "kelvin") {

        if (value < 0) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (0 K).";
            return;
        }

        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Display results
    celsiusResult.textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
});