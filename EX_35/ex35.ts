// Creating a function

function Make_TShirtNew(size:string, message:string)
{
    console.log("The size of Shirt is " + size);
    if (size == "Large" || size == "Medium")
    {
        console.log("Default message: I Love Typescript");
    }
    console.log("The message printed on shirt is :" + message);

}

// call the above function

console.log("Before function call");

Make_TShirtNew("Large","Pakistan Zindabad!");

console.log("After function call");