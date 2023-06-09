// Get a reference to the button element
var button = document.getElementById('myButton');

// Define an event handler function
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event:', event);
}

// Register the event handler to the button click event
button.addEventListener('click', handleClick);
