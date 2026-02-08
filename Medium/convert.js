/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convert(args) {
  if (typeof args !== "string") {
    return "Error";
  }

  if (args.includes("°C")) {
    const temp = args.replace("°C", "");
    return Math.round((temp * 9) / 5 + 32) + "°F";
  }

  if (args.includes("°F")) {
    const temp = args.replace("°F", "");
    return Math.round(((temp - 32) * 5) / 9) + "°C";
  }

  return "Error";
}

exports.solution = convert;
