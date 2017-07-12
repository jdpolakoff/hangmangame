console.log('im linked')

var input = $('input')
var button = $('button')
var refresh = $('.refresh')
var letterBoard = $('.wordgoeshere')
var selectedLetters = []
var splitInput
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
    j: $('#k'),
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
    }


$.each(alphabet, function(key, value) {
      var splitInput = input.val().split("")
      value.on('click', function (){
        selectedLetters.push(key)
        console.log(selectedLetters)
        for (i = 0; i < selectedLetters.length; i++)
          if (input.val().split("").includes(selectedLetters[i])) {
        console.log('found a match')
          matchLetters.push(selectedLetters[i])
          } else {
        console.log('no match')
        wrongLetters.push(selectedLetters[i])
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
