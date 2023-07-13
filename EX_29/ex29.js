var newuserIDs = ["admin", "furqan", "naseer", "farhaan"];
newuserIDs.length = 0;
if (newuserIDs.length != 0) {
    for (var user in newuserIDs) {
        if (newuserIDs[user] == "admin") {
            console.log("Hello" + newuserIDs[user] + ", would you like to see a status report?");
        }
        else {
            console.log("Hello " + newuserIDs[user] + "!, Thanks for logging again!");
        }
    }
}
else {
    console.log("we need to find some users!");
}
