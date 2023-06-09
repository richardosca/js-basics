var myVar = "global"; // Declare a global variable

function target( ) {
 var myVar = "local"; // Declare a local variable
 console.log(myVar);
}


console.log(myVar);
target();
