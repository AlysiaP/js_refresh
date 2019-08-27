//the forecast today is 293 Kelvin - this will stay constant
const kelvin = 0;
//Celsius is similar to Kelvin, but is 273 degrees less than Kelvin
var celsius = kelvin - 273;
//Fahrenheit equation to convert celsius degrees into fahrenheit degrees and round to the nearest whole number
var fahrenheit = Math.floor(celsius*(9/5)+32);
//Newton equation to convert celsius degrees into Newtwon degree and round to the nearest whole number
var newton = Math.floor(celsius*(33/100));
//print results
console.log(`The temperature is ${fahrenheit} degeres Fahrenheit.`);
console.log(`The temperate is ${newton} degrees Newton.`)