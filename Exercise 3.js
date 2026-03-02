//Exercise 3: Interactice Counter Menu

// Create a counter variable
let meuncounter = 0;

// Variable to store the user's menu choice
let userChoice;

//Use a do-while loop to ensure the menu displays at least once
do {
  //Display current counter value and menu options
  userChoice = prompt(
    `Current Counter Value: ${meuncounter}\nChoose an option:\n1. Increment Counter\n2. Decrement Counter\n3. Reset Counter\n4. Exit\n\nEnter your choice (1-4):`,
  );

  //Convert the string input into an integer
  const option = parseInt(userChoice);

  //Use a switch statement to handle the user's choice
  switch (option) {
    case 1:
      // Increment the counter
      menucounter++;
      break;
    case 2:
      // Decrement the counter
      menucounter--;
      break;
    case 3:
      // Reset the counter to 0
      menucounter = 0;
      break;
    case 4:
      // Exit the loop and end the program
      alert("Exiting the menu. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please enter a number between 1 and 4.");
  }
  // The loop will continue until the user chooses to exit (option 4)
} while (parseInt(userChoice) !== 4);
