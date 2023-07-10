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
for (var guest in guest_List)
{
    console.log("".concat(guest_List[guest], " you are invited for a dinner tonight"));

}
