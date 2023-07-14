var dash = '-- '
var doubleQoute = '"'
qoutes=[
  {
    'qoute':`${doubleQoute}Do not take life too seriously. You will not get out alive.${doubleQoute}`,
    'authorOoute':`${dash}Elbert Hubbard`,
  },
  {
    'qoute':`${doubleQoute}Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.${doubleQoute}`,
    'authorOoute':`${dash}Albert Einstein`,
  },
  {
    'qoute':`${doubleQoute}So many books, so little time.${doubleQoute}`,
    'authorOoute':`${dash}Frank Zappa` ,
  },
  {
    'qoute':`${doubleQoute}Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.${doubleQoute}`,
    'authorOoute':`${dash}Bernard M. Baruch`,
  },
]
var previousQoute = -1
// console.log(`previousQoute ${previousQoute}`);
function randomQoute() {
  var newQoute;
  var random;
  do {
     random = parseInt( Math.random()*qoutes.length);
    //  console.log(`random ${random}`);
     newQoute = random
  } while (newQoute === previousQoute);
  previousQoute = newQoute
  // console.log(`previousQoute ${previousQoute}`);
  // console.log(`newQoute ${newQoute}`);
  document.getElementById('qoute').innerHTML = qoutes[newQoute].qoute;
  document.getElementById('authorOoute').innerHTML = qoutes[newQoute].authorOoute;
  return newQoute
}