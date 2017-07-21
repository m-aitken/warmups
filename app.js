var map1 = [
['A','A','A','A','A'],
['A','A','X','A','A'],
['A','A','A','A','A'],
['A','A','A','A','A'],
['A','A','A','A','A']
];

var treasureFinder = function (map) {
  var array = []
  for (i=0; i<map.length; i++) {
    array.push(map[i].indexOf('X'));
    // for (j=0; j<map.length; j++) {   
    }
      // array.push(map[i][j].indexOf('X')); 
  
  console.log(array);
};