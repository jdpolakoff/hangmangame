console.log('im linked')

var input = $('input')
var button = $('button')
var refresh = $('.refresh')
var letterBoard = $('.wordgoeshere')
var splitInput = []
var selectedLetters = []
var matchLetters = []
var wrongLetters = []
var gameboard = $('.gameboard')
var uniqueWrongLetters = []
var uniqueMatchLetters = []


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

//create function to take input prints it, counts number of letters in input and creates gameboard

var handleInput = function (e){
  splitInput = input.val().split("")
  e.preventDefault()
  console.log(input.val())
  input.val().length
  console.log(input.val().length)
  for (i = 0; i < input.val().length; i++)
    letterBoard.append('_')
      letterBoard.css('font-family', 'Inconsolata', 'monospace')
      letterBoard.css('font-size', '56px')
      letterBoard.css('text-align', 'center')
  console.log(splitInput)
    }

//$(.letters)

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
}


var renderMan = function () {
      switch (uniqueWrongLetters.length){
          case 1:
            gameboard.css('background-image', "url('hangman2.png')")
            break;
          case 2:
            gameboard.css('background-image', "url('hangman3.png')")
            break;
          case 3:
            gameboard.css('background-image', "url('hangman4.png')")
            break;
          case 4:
            gameboard.css('background-image', "url('hangman5.png')")
            break;
          case 5:
            gameboard.css('background-image', "url('hangman6.png')")
            break;
          case 6:
            gameboard.css('background-image', "url('hangman7.png')")
            break;
          case 7:
            gameboard.css('background-image', "url('hangman8.png')")
            $('html').css('background', '#e83f33');
            $('h1').text('You Lose :( ')
            break;
            }
}

$.each(alphabet, function(key, value) {
      value.on('click', function (){
        console.log(splitInput)
        selectedLetters.push(key)
        console.log(selectedLetters)
        value.css('color', 'white')
        for (i = 0; i < selectedLetters.length; i++)
          if (splitInput.includes(selectedLetters[i])) {
          console.log('found a match')
          matchLetters.push(selectedLetters[i])
          uniquematchLetters = matchLetters.filter(function(elem, index, self){
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












/*  for (i = 0; i < splitInput.length; i++) {
    if (splitInput[i] === )


          if (letters.text().toLowerCase() === splitInput[i])

  //create function that gets the character value at string index and compares to clicked letters
    //if clicked letter === letter in input, then put it in gameboard
    //if clicked letter !== letter in input, put it in loser's pile and toggle image




*/
//event listener for input to be printed when button pressed
button.on('click', handleInput)

//event listener to refresh
refresh.on('click', function () {
  location.reload()})





  /*for (i = 0; i < input.val().length; i++) {
    if (letter === input.val().charAt(i))
}*/
//create event listeners on all letters


//var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]


//create
