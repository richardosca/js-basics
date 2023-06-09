var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();

// Format the minutes to have leading zeros if necessary
if (minutes < 10) {
  minutes = "0" + minutes;
}

// Output the current time in hours and minutes
console.log("Current time: " + hours + ":" + minutes);
