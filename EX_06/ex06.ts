let person_Name = "\t\t" + "Arsalan" + "\n" + "Akhtar" + "\t\t\t"; // Person's Name with white space characters
console.log(person_Name); // with white space character
console.log(person_Name.trim().replace(/[\r\n]/gm, '')); // without whitespace characters
