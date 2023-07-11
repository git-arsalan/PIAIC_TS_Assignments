// Introducing type script object
// An object is an instance which contains set of key value pairs. 
//The values can be scalar values or functions or even array of other objects

var student = { 
    firstName: "Arsalan", //scalar value 
    lastName: "Akhtar",  
    showFullName: function() {
       //console.log(student.firstName + " " + student.lastName); 
    },  // function
    subjects:["Computer Science", "Chemistry"] //collection  
 }

 student.showFullName = function() 
 {  
    console.log(student.firstName + " " + student.lastName);
 }  

 student.showFullName();
 console.log(student.subjects);