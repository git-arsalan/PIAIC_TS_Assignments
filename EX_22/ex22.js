console.log("Equality and unequality test with strings");
let country = 'Pakistan';
console.log("(country == 'Pakistan'):" + (country == 'Pakistan')); // Equality Test for string
console.log("(country != 'Pakistan'):" + (country != 'Pakistan')); // Inequality Test for string
console.log("Equality and unequality test for lower case string");
let city = "karachi";
console.log("(Is city in lowercase?):" + (city == city.toLowerCase())); // Equality Test string lowercase
console.log("(Is city Not in lowercase?):" + (city != city.toLowerCase())); // Inequality Test string lowercase
console.log("Numerical Test using Equality, unequality , less than , greater than etc");
let num1 = 20;
let num2 = 30;
let num3 = 40;
let num4 = 30;
console.log("num1=" + num1);
console.log("num2=" + num2);
console.log("Is num1 > num2 :" + (num1 > num2)); // greater than test
console.log("Is num1 < num2 :" + (num1 < num2)); // less than test
console.log("Is num2 >=num4 :" + (num2 >= num4)); // greater than equal to test
console.log("Is num2 <=num3 :" + (num1 >= num2)); // less than equal to test
// conditional test using && and || operator
console.log("Is (num1 > num2) && (num1 < num2):" + ((num1 > num2) && (num1 < num2))); // And operator both true than true
console.log("Is (num1 > num2) || (num1 < num2):" + ((num1 > num2) || (num1 < num2))); // OR operator any one true than true
// Checking elements present in an Array
console.log("Checking an element present in an array");
var arr_fruits = ["Mango", "Grapes", "Apple"];
console.log("Sample Array:" + arr_fruits);
console.log("Is Mango Present in fruit Array?" + arr_fruits.includes('Mango'));
console.log("Is Mango not Present in fruit Array?" + !arr_fruits.includes('Mango'));
//# sourceMappingURL=ex22.js.map