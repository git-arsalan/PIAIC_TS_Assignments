// storing numbers in array
let nums = [1,2,3,4,5,6,7,8,9];

// iterating through array

console.log("Printing Ordinal Numbers!");
for (var num in nums)
{
    if (nums[num] == 1)
    {
        console.log("1st");
    }
    else if (nums[num] == 2)
    {
        console.log("2nd");
    }
    else if (nums[num] == 3)
    {
        console.log("3rd");
    }
    else 
    {
        console.log(nums[num] + "th");
    }
    
}
