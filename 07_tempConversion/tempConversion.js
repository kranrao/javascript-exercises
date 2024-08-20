/* 
  Converts a Fahrenheit temperature to Celsius.

  @param {number} fahrenheit - The Fahrenheit temperature to be converted.
  @returns {number} The Celsius conversion of the given temperature,
                    rounded to 1 decimal place.
  @throws {Error} Will throw an error if the parameter is not a number.
 */
const convertToCelsius = function(fahrenheit) {
  if (typeof fahrenheit !== "number" || isNaN(fahrenheit)) {
    throw new Error("Input must be a valid number");
  }
  
  let celsius = (fahrenheit - 32) * (5 / 9)
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  if (typeof celsius !== "number" || isNaN(celsius)) {
    throw new Error("Input must be a valid number");
  }
  
  let fahrenheit = celsius * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
