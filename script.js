console.log('im linked')

var input = $('input')
var button = $('button')
var refresh = $('.refresh')
var letterBoard = $('.wordgoeshere')
var splitInput = []
var selectedLetters = []
var matchLetters = []
var wrongLetters = []


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
  e.preventDefault()
  console.log(input.val())
  input.val().length
  console.log(input.val().length)
  for (i = 0; i < input.val().length; i++)
    letterBoard.append('_')
      letterBoard.css('font-family', 'Inconsolata', 'monospace')
      letterBoard.css('font-size', '56px')
      letterBoard.css('text-align', 'center')
  console.log(input.val().split(""))
      splitInput = input.val().split("")
    }

//$(.letters)

// .every if every letter is in there, is every letter in split input in matchArray


var renderLetters = function() {
  var displayLetters = splitInput.map(function(letter){
    if (matchLetters.includes(letter)){
      return letter
    } else {
      return '_'
    }
  })
  var displayWord = displayLetters.join('')
  letterBoard.text(displayWord)
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
          renderLetters()
          } else {
          console.log('no match')
          wrongLetters.push(selectedLetters[i])
          renderLetters()
          // renderMan() update dom with images
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
