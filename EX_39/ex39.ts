// Making array of magicians
let magicians = ["Jhon", "Lee" , "Mark" , "Sam" , "Tom"];

// Making Functions show magicians

//console.log ("showing all magician!");

function showMagician(magiList:string[])
{
    for (var magician in magiList)
    {
        console.log ("Magician " + magicians[magician]);

    }
}

console.log ("showing all magician by calling function!");

showMagician(magicians);