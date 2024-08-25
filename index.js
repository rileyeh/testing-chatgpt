const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const playGame = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1

  const askQuestion = () => {
    rl.question('Guess a number between 1 and 10: ', (answer) => {
      const userGuess = parseInt(answer)

      if (isNaN(userGuess)) {
        console.log('That is not a valid number. Please try again.')
        askQuestion() // Prompt again
      } else if (userGuess < 1 || userGuess > 10) {
        console.log('Please enter a number between 1 and 10.')
        askQuestion() // Prompt again
      } else {
        if (userGuess === randomNumber) {
          console.log('Congratulations! You guessed the correct number!')
        } else {
          console.log(
            `Sorry, the correct number was ${randomNumber}. Better luck next time!`
          )
        }
        askPlayAgain() // Ask if they want to play again
      }
    })
  }

  const askPlayAgain = () => {
    rl.question('Would you like to play again? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        playGame() // Restart the game
      } else {
        console.log('Thanks for playing! Goodbye!')
        rl.close() // Close the interface
      }
    })
  }

  // Start the question prompt
  askQuestion()
}

// Start the game for the first time
playGame()
