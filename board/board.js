// pyramid example
function getPyramid(param) {

for(var i=0; i < param; i++) {
var output="";
    for(var j = 0; j < param - i; j++) {
        output+=" ";
        // console.log(" ");
    }
    for(var k = 0; k <= i; k++) {
       // console.log("* ");
       output += "* ";
    }
    // output += "";
    console.log(output);  
    }
}


// chessboard

var getBoard = function (board) {        // parameter to set size
for (i = 0; i < board; i++) {
    var output = "";  //undefined, but is an empty string
        //console.log("#")    
    for (j = 0; j < board; j++) {
       if (i % 2 === 0) {
       output += "# " 
       console.log(output + " ");
    }        



    }

}
}