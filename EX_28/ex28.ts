// creating Arrays of UserId
let userIDs = ["admin", "furqan", "naseer", "farhaan"];

for (var user in userIDs )
{
    if (userIDs[user] == "admin")
    {
        console.log("Hello" + userIDs[user] + ", would you like to see a status report?");

    }
    else
    {

        console.log("Hello " + userIDs[user] + "!, Thanks for logging again!");
    }
}