// Import the readline module to interact with the user
const readline = require('readline')

// Create an interface for user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Function to generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1

// Ask the user for a number
rl.question('Guess a number between 1 and 10: ', (answer) => {
  const userGuess = parseInt(answer)

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    console.log('Congratulations! You guessed the correct number!')
  } else {
    console.log(
      `Sorry, the correct number was ${randomNumber}. Better luck next time!`
    )
  }

  // Close the readline interface
  rl.close()
})
