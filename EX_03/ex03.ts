// code for exercise # 3
let persons_Name = "arSalan akHtar"; // storing person's Name in a variable named as person_Name
// printing person name in a lower case
console.log(persons_Name.toLowerCase() + ": Person's Name in a lower case");
// printing person name in a uppercase
console.log(persons_Name.toUpperCase() + ": Person's Name in a upper case");
// printing person name in title case
// defining custom function for title case

function convertToTitleCase(toConvert:string):string
{
    // spilting words in a string
    let splits:string[] = toConvert.split(" "); // spliting sentence by words

    for (var split in splits)
    {
        splits[split] = splits[split].toLowerCase();  // First convert each words in lowercase
        splits[split] = splits[split].charAt(0).toUpperCase() + splits[split].slice(1); // Make first letter capital and join rest

    }

    return splits.join(" "); // Join each word by Space.

}

console.log(convertToTitleCase(persons_Name) + ": Person's Name in a Title Case");
  

//


//console.log(persons_Name.to + ": Person's Name in a lower case");


