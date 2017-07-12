console.log('im linked')

var input = $('input')
var button = $('button')

//create function to take input and print it
var handleInput = function (e){
  e.preventDefault()
  console.log(input.val())
}

//event listener for input to be printed when button pressed
button.on('click', handleInput)

//create function that counts number of letters in input and creates gameboard


//create function that compares clicked letters to input
  //if clicked letter === letter in input, then put it in gameboard
  //if clicked letter !== letter in input, put it in loser's pile and toggle image


//create event listeners on all letters


//create
