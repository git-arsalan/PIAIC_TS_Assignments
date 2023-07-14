var curr_users = ["Fahad", "Yasir", "Talha", "SHAKIR", "Siraj"];
var new_Users = ["shah", "Shakir", "Tom", "Anas"];
// VALIDATING NEW USERS 
// USING Nested LOOP 
for (var new_User in new_Users) {
    var isUserAvailable = true;
    for (var curr_user in curr_users) {
        if (curr_users[curr_user].toUpperCase() == new_Users[new_User].toUpperCase()) {
            console.log("The Username" + " \"".concat(new_Users[new_User], "\"") + " is not available. Please choose another");
            isUserAvailable = false;
            break;
        }
    }
    if (isUserAvailable) {
        console.log("The Username" + " \"".concat(new_Users[new_User], "\"") + " is available");
    }
}
