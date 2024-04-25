function generateRandomTime() {
  const hours = Math.floor(Math.random() * (21 - 8 + 1)) + 8; // Random hour between 8 and 21 (9 PM)
  const minutes = Math.floor(Math.random() * 4) * 15; // Random minutes rounded to the nearest 15
  const meridiem = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM based on hour

  // Format hours (12-hour clock)
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // Format minutes with leading zero if necessary
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Concatenate hours, minutes, and meridiem to form the time string
  const timeString = `${formattedHours}:${formattedMinutes} ${meridiem}`;

  return timeString;
}




// Define fetchAPI function
function fetchAPI(date) {
        
    // Generate an array of 5 random times between 8 AM and 9 PM
    const availableTimes = Array.from({ length: Math.floor(Math.random() * (10 - 1 + 1)) + 1 }, () => { return (generateRandomTime()) }, generateRandomTime);

    console.log(availableTimes);
    // Simulate API call with a delay (for demonstration purposes)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(availableTimes);
      }, 1000); // 1 second delay
    });
  }
  
  // Define submitAPI function
  function submitAPI(formData) {
    return new Promise((resolve, reject) => {
      // Simulate submission success
      // You can replace this with your actual submission logic
      // If submission succeeds, resolve the promise with true
      setTimeout(() => {
        resolve(true);
      }, 2000); // Simulate a delay of 2 second for demonstration purposes
      // If submission fails, reject the promise with an error message
      // reject("Error: Submission failed"); // Uncomment this line if you want to simulate submission failure
    });
  }
  
  // Export functions
  export { fetchAPI, submitAPI };
  