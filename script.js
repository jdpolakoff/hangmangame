console.log('im linked')
// Generally, remove console.log's meant for testing before pushing to production

var input = $('input')
var button = $('.button')
var refresh = $('.refresh')
var letterBoard = $('.wordgoeshere')
var gameboard = $('.gameboard')
var h1 = $('.headline')
// Stylistically, I would keep all variables storing DOM elements together
var splitInput = []
var selectedLetters = []
var matchLetters = []
var wrongLetters = []
var uniqueWrongLetters = []
var uniqueMatchLetters = []
var countspaces
var gameStarted = false
var uniqueInputArray = []

var alphabet = {
    a: $('#a'),
    b: $('#b'),
    c: $('#c'),
    d: $('#d'),
    e: $('#e'),
    f: $('#f'),
    g: $('#g'),
    h: $('#h'),
    i: $('#i'),
    j: $('#j'),
    k: $('#k'),
    l: $('#l'),
    m: $('#m'),
    n: $('#n'),
    o: $('#o'),
    p: $('#p'),
    q: $('#q'),
    r: $('#r'),
    s: $('#s'),
    t: $('#t'),
    u: $('#u'),
    v: $('#v'),
    w: $('#w'),
    x: $('#x'),
    y: $('#y'),
    z: $('#z'),
          }

//issues --- getting uniqueMatchLetters to equal solutions with spaces
//getting spaces in initial game layout
// getting the letter board to format when more than 17 characters
// making the game static if there is no text input

//create function to take input prints it, counts number of letters in input and creates gameboard

// Remove psuedo-code from production code or move each line next to the code it refers
// to for future reference

var handleInput = function (e){
  gameStarted = true
  splitInput = input.val().toLowerCase().split("")
  uniqueInputArray = splitInput.filter(function(elem, index, self){
    return index == self.indexOf(elem) && elem !== " "
    // Good use of filter to isolate unique values
  })
  var invalidInput = splitInput.some(function(letter){
    return !Object.keys(alphabet).includes(letter) && letter !== " "
  })
  if (invalidInput){
    alert('Please enter a word')
    return
  }
  e.preventDefault()
  console.log(input.val())
  input.val().length
  console.log(input.val().length)
  console.log(splitInput)
  // Remove console.logs
  for (i = 0; i < splitInput.length; i++) {
    if (splitInput[i] !== " "){
    letterBoard.append('_')
      letterBoard.css('font-family', 'Inconsolata', 'monospace')
      letterBoard.css('font-size', '56px')
      letterBoard.css('text-align', 'center')
      // Couldn't you just apply the above css styling to the DOM element in your style.css file?
    } else if (splitInput[i] === " ") {
      letterBoard.append(' ')
      countspaces = 0
      countspaces++
      // Is this "countspaces" variable being used / neccessary?
    }
    if (i % 15 === 0 && i !== 0){
      letterBoard.append('\n')
      console.log('divisible by 15')
    }
  }
  input.css('visibility', 'hidden')
  button.prop('disabled', true)
}
// See if you can break this large "handleInput" function into smaller functions that
// get called within handleInput but are more targeted and reusable
//$(.lters)

// .every if every letter is in there, is every letter in split input in matchArray


var renderLetters = function() {
  var displayLetters = splitInput.map(function(letter){
    if (matchLetters.includes(letter)){
      return letter
    } else if (letter === ' ') {
      return ' '
    } else {
      return '_'
    }
  })
  var displayWord = displayLetters.join('')
  letterBoard.text(displayWord)
  if (uniqueMatchLetters.length === uniqueInputArray.length){
    $('html').css('background', '#b5efa5')
    h1.text('You Win :) ')
    gameStarted = false
  }
}


var renderMan = function () {
      switch (uniqueWrongLetters.length){
          case 1:
            gameboard.css('background-image', "url('hangman2.png')")
            h1.html('<span id="number">Six</span> misses left')
            $('#number').css('color', '#e83f33')
            break;
          case 2:
            gameboard.css('background-image', "url('hangman3.png')")
            h1.html('<span id="number">Five</span> misses left')
            $('#number').css('color', '#e83f33')
            break;
          case 3:
            gameboard.css('background-image', "url('hangman4.png')")
            h1.html('<span id="number">Four</span> misses left')
            $('#number').css('color', '#e83f33')
            break;
          case 4:
            gameboard.css('background-image', "url('hangman5.png')")
            h1.html('<span id="number">Three</span> misses left')
            $('#number').css('color', '#e83f33')
            break;
          case 5:
            gameboard.css('background-image', "url('hangman6.png')")
            h1.html('<span id="number">Two</span> misses left')
            $('#number').css('color', '#e83f33')
            break;
          case 6:
            gameboard.css('background-image', "url('hangman7.png')")
            h1.html('<span id="number">One</span> miss left. Choose wisely.')
            $('#number').css('color', '#e83f33')
            break;
          case 7:
            gameboard.css('background-image', "url('hangman8.png')")
            $('html').css('background', '#e83f33')
            $('h1').text('You Lose :( ')
            gameStarted = false
            $('.letters').css('visibility', 'hidden')
            break;
            }
}

$.each(alphabet, function(key, value) {
      value.on('click', function (){
        if (!gameStarted) return
        console.log(splitInput)
        selectedLetters.push(key)
        console.log(selectedLetters)
        value.css('visibility', 'hidden')
        // Put the below logic into a function that is called from this event listener
        for (i = 0; i < selectedLetters.length; i++)
          if (splitInput.includes(selectedLetters[i])) {
          console.log('found a match')
          matchLetters.push(selectedLetters[i])
          uniqueMatchLetters = matchLetters.filter(function(elem, index, self){
            return index == self.indexOf(elem)
          })
          renderLetters()
          } else {
          console.log('no match')
          wrongLetters.push(selectedLetters[i])
          uniqueWrongLetters = wrongLetters.filter(function(elem, index, self){
            return index == self.indexOf(elem)
          })
          renderLetters()
          renderMan()
          }

      })
    })


    //event listener for input to be printed when button pressed
    button.on('click', handleInput)

    //event listener to refresh
    refresh.on('click', function () {
      location.reload()})

    // While this is acceptable for a simpler game, better practice would be to create
    // a function that resets the game that is called when "refresh" is clicked









/*  for (i = 0; i < splitInput.length; i++) {
    if (splitInput[i] === )


          if (letters.text().toLowerCase() === splitInput[i])

  //create function that gets the character value at string index and compares to clicked letters
    //if clicked letter === letter in input, then put it in gameboard
    //if clicked letter !== letter in input, put it in loser's pile and toggle image




*/





  /*for (i = 0; i < input.val().length; i++) {
    if (letter === input.val().charAt(i))
}*/
//create event listeners on all letters


//var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]


//create
