// anna
// air an aria
// avid diva
// madam im adam

// var palindrome = 'air an aria';

// var checkPalindrome = function (palindrome) {
//   if (palindrome === palindrome.reverse()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };


var checkPalindrome = function (p) {
 if (p.split('').reverse().join('') === p) {  // remove spaces
  console.log(true);
 } else if (p.split('').reverse().join('') !== p) {
  console.log(false);
 }
};

// var check = function (p) {
//   var split = p.split('');
//   var rev = split.reverse();
//   var join = rev.join('');
//   if (join === p) {
//     console.log(true);
//   }; else {
//     console.log(false);
//   };
// };