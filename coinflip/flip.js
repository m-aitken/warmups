var flip = document.querySelector('#button');

var side = ['Heads','Tails'];

var coinFlip = function () {
  var result = side[Math.floor(Math.random()*2)];
  // var key = indexOf(result);  // get index [i]



  console.log(result);
  console.count(result);

  // if () {      // result = 'string'
  //   console.log('WINNER');
  // };

  // return result;


};


flip.addEventListener('click', coinFlip);