// this connects the "Guess" button to "random function"
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // a number typed in by user gets converted  into an integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // produces a random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // compare user's guess with random number
  if (userGuess == randomNumber) {
    document.getElementById('answer').innerHTML = 'You win!'
  }
}
