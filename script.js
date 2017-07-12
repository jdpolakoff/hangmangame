console.log('im linked')

var input = $('input')
var button = $('button')
var refresh = $('.refresh')
var letterBoard = $('.wordgoeshere')

//create function to take input and print it
var handleInput = function (e){
  e.preventDefault()
  console.log(input.val())
  input.val().length
  console.log(input.val().length)
  for (i = 0; i < input.val().length; i++) {
    letterBoard.append('_')
      letterBoard.css('font-family', 'Inconsolata', 'monospace')
      letterBoard.css('font-size', '56px')
      letterBoard.css('text-align', 'center')
  }
}

//event listener for input to be printed when button pressed
button.on('click', handleInput)

//event listener to refresh padding-lef
refresh.on('click', function () {
  location.reload()})

//create function that counts number of letters in input and creates gameboard
/*var countLetters = function() {
  input.val().length
  console.log(input.val().length)
}

countLetters()*/



//create function that compares clicked letters to input
  //if clicked letter === letter in input, then put it in gameboard
  //if clicked letter !== letter in input, put it in loser's pile and toggle image


//create event listeners on all letters


//create
