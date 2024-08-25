const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const randomNumber = Math.floor(Math.random() * 10) + 1

const askQuestion = () => {
  rl.question('Guess a number between 1 and 10: ', (answer) => {
    const userGuess = parseInt(answer)

    // Check if the input is not a number
    if (isNaN(userGuess)) {
      console.log('That is not a valid number. Please try again.')
      askQuestion() // Prompt again
    } else if (userGuess < 1 || userGuess > 10) {
      console.log('Please enter a number between 1 and 10.')
      askQuestion() // Prompt again
    } else {
      // Check if the user's guess is correct
      if (userGuess === randomNumber) {
        console.log('Congratulations! You guessed the correct number!')
      } else {
        console.log(
          `Sorry, the correct number was ${randomNumber}. Better luck next time!`
        )
      }
      rl.close() // Close the interface
    }
  })
}

// Start the question prompt
askQuestion()
