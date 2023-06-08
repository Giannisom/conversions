// Get the Fahrenheit input field and result element
const fahrenheitInput = document.getElementById("fahrenheit");
let resultElement = document.getElementById("result");

// Add an event listener to the Fahrenheit input field
fahrenheitInput.addEventListener("input", convertToFahrenheit);

function convertToFahrenheit() {
  // Get the Fahrenheit input field value
  let fahrenheit = fahrenheitInput.value;

  if (fahrenheit === '') { // check if the input field is empty
    resultElement.innerHTML = ''; // clear the result element
    return; // exit the function
  }

  // Convert Fahrenheit to Celsius
  let celsius = (fahrenheit - 32) * 5 / 9;

  // Display the result on the page
  resultElement.innerHTML = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}

// Get the Celsius input field and result element
const celsiusInput = document.getElementById("celsius");
let result2Element = document.getElementById("result2");

// Add an event listener to the Celsius input field
celsiusInput.addEventListener("input", convertToCelsius);

function convertToCelsius() {
  // Get the Celsius input field value
  let celsius = celsiusInput.value;

  if (celsius === '') { // check if the input field is empty
    result2Element.innerHTML = ''; // clear the result element
    return; // exit the function
  }

  // Convert Celsius to Fahrenheit
  let fahrenheit = (celsius * 9 / 5) + 32;

  // Display the result on the page
  result2Element.innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// Get the Euro input field and result element
const euroInput = document.getElementById("euro");
let result3Element = document.getElementById("result3");

// Add an event listener to the Euro input field
euroInput.addEventListener("input", convertToEuro);

function convertToEuro() {
  // Get the Euro input field value
  let euro = euroInput.value;

  if (euro === '') { // check if the input field is empty
    result3Element.innerHTML = ''; // clear the result element
    return; // exit the function
  }

  // Convert Euro to Dollar
  let dollar = euro * (1.18);

  // Display the result on the page
  result3Element.innerHTML = `${euro} € = ${dollar.toFixed(1)} $`;
}

// Get the Dollar input field and result element
const dollarInput = document.getElementById("dollar");
let result4Element = document.getElementById("result4");

// Add an event listener to the Dollar input field
dollarInput.addEventListener("input", convertToDollar);

function convertToDollar() {
  // Get the Dollar input field value
  let dollar = dollarInput.value;

  if (dollar === '') { // check if the input field is empty
    result4Element.innerHTML = ''; // clear the result element
    return; // exit the function
  }

  // Convert Dollar to Euro
  let euro = dollar / (1.18);

  // Display the result on the page
  result4Element.innerHTML = `${dollar}$ = ${euro.toFixed(1)} €`;
}

// Animation
const h1 = document.querySelector('h1');

function fadeIn() {
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.05;
    h1.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval);
      setTimeout(fadeOut, 3000); // Wait for 3 seconds before fading out
    }
  }, 50);
}

function fadeOut() {
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.05;
    h1.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
      setTimeout(fadeIn, 10); // Time before fading in (1000 = 1sec)
    }
  }, 50);
}

fadeIn(); // Start the animation
