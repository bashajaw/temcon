function convertTemp() {
    let tempInput = document.getElementById("temp-input").value;
    let fromUnit = document.getElementById("from-unit").value;
    let toUnit = document.getElementById("to-unit").value;
    let result = document.getElementById("result");

    if (fromUnit == "Celsius") {
        if (toUnit == "Fahrenheit") {
            let convertedTemp = tempInput * 9 / 5 + 32;
            result.innerHTML = tempInput + "°C = " + convertedTemp.toFixed(2) + "°F";
        } else if (toUnit == "Kelvin") {
            let convertedTemp = parseFloat(tempInput) + 273.15;
            result.innerHTML = tempInput + "°C = " + convertedTemp.toFixed(2) + "K";
        } else {
            result.innerHTML = "Please select a valid 'To' temperature unit.";
        }
    } else if (fromUnit == "Fahrenheit") {
        if (toUnit == "Celsius") {
            let convertedTemp = (tempInput - 32) * 5 / 9;
            result.innerHTML = tempInput + "°F = " + convertedTemp.toFixed(2) + "°C";
        } else if (toUnit == "Kelvin") {
            let convertedTemp = (tempInput - 32) * 5 / 9 + 273.15;
            result.innerHTML = tempInput + "°F = " + convertedTemp.toFixed(2) + "K";
        } else {
            result.innerHTML = "Please select a valid 'To' temperature unit.";
        }
    } else if (fromUnit == "Kelvin") {
        if (toUnit == "Celsius") {
            let convertedTemp = tempInput - 273.15;
            result.innerHTML = tempInput + "K = " + convertedTemp.toFixed(2) + "°C";
        } else if (toUnit == "Fahrenheit") {
            let convertedTemp = (tempInput - 273.15) * 9 / 5 + 32;
            result.innerHTML = tempInput + "K = " + convertedTemp.toFixed(2) + "°F";
        }
    }
}
