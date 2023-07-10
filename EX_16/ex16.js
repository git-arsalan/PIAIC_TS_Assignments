var list_cities = ["Istanbul", "Mecca", "Casablanca", "Bombay", "Karachi"];
console.log("The Orignal Array");
console.log(list_cities); // Array in their orignal order
var result = list_cities.slice().sort();
console.log("The sorted Array in Ascending order");
console.log(result); // Printing the sorted array
console.log("The orignal Array after sorting");
console.log(list_cities); // Printing the orignal Array
console.log("The sorted Array in Descending order");
var result_desc = list_cities.slice().sort().reverse();
console.log(result_desc); // Printing the sorted array in desc order
console.log("The orignal Array after sorting");
console.log(list_cities); // Printing the orignal Array
console.log("Now Sorting the orignal Array by changing it");
console.log(list_cities.sort()); // Printing the orignal Array by sorting it 
console.log("Now Printing the orignal Array by changing it");
console.log(list_cities); // printing orignal Array
