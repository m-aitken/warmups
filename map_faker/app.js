console.log('map');

var makeFakeMap = function (line, row) {

var testArray = [['A','A','A'], ['A','A','A'], ['A','A','A']];

var arr1 = ['X','A','A','A','A']
var arr2 = ['A','X','A','A','A']
var arr3 = ['A','A','X','A','A']
var arr4 = ['A','A','A','X','A']
var arr5 = ['A','A','A','A','X']



console.log(testArray.join("\n"));


 for (var i=0; i<line; i++) {
  var map = "";

  for (j=0; j<line; j++) {
    map += "A";
    console.log(map + " ");
    }
  }
};


//   var mapArray = mapArray.map(pos);
//  }
// console.log(mapArray);
// };
