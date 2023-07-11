var guest_List = ["Ammar", "Yasir", "faysal"];
console.log("".concat(guest_List[1], " cannot meet us due some personal engagement"));
console.log("We have a new guest!");
console.log("below is the updated guest list!");
guest_List[1] = "Arafat";
console.log("".concat(guest_List[0], " you are invited for a dinner tonight"));
console.log("".concat(guest_List[1], " you are invited for a dinner tonight"));
console.log("".concat(guest_List[2], " you are invited for a dinner tonight"));
// Announcement, we have a bigger table
console.log("We have now a bigger dining table, so we have two more new guest");
// Adding New guest
guest_List.unshift("Hammad"); // inserting element at the start of array
guest_List.push("Anas"); // inserting element at the end of array
// printing guest list using loop
for (var guest in guest_List) {
    console.log("".concat(guest_List[guest], " you are invited for a dinner tonight"));
}
console.log("Oh! we have a bad news! we can only invite two guest due to improper sitting arrangements");
// removing guest from the list
while (guest_List.length > 2) {
    console.log(guest_List.pop() + " sorry! you can`t be invited for dinner");
}
while (guest_List.length > 0) {
    console.log(guest_List.pop() + " you are still invited for a dinner tonight");
}
console.log("No. of guest in updated list: ".concat(guest_List.length));
// Already done in exercise 15
