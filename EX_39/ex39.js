// Making array of magicians
var magicians = ["Jhon", "Lee", "Mark", "Sam", "Tom"];
// Making Functions show magicians
//console.log ("showing all magician!");
function showMagician(magiList) {
    for (var magician in magiList) {
        console.log("Magician " + magicians[magician]);
    }
}
console.log("showing all magician by calling function!");
showMagician(magicians);
