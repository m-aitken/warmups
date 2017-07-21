//Mini Golf scores
//hand in score, log the total

var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];

var totalScores = function (name) {
  var total = 0;
  for (var i = 0; i < name.length; i++) {
    total += (name[i]);
  }
  return total;
};

// Par
// compare total against course par

var par = [3, 4, 5, 5, 3, 3, 4, 3, 5]; // Total Par = 35

var checkPar = function (name, par)  {
  var diff = 0;
  for (var i = 0; i < name.length; i++) {
    diff = name[i] - par[i];
    console.log(diff);
  }
};