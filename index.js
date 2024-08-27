// import readline
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const playGame = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1
  let guessHistory = []

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
        guessHistory.push(userGuess) // Add guess to history

        if (userGuess === randomNumber) {
          console.log('Congratulations! You guessed the correct number!')
          console.log(`Your guesses: ${guessHistory.join(', ')}`)
          askPlayAgain() // Ask if they want to play again
        } else {
          console.log(
            `Sorry, that's not correct. Your guesses so far: ${guessHistory.join(
              ', '
            )}`
          )
          askQuestion() // Prompt again
        }
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
