var year = function () {
    min = 1930
    max = 1950
return Math.floor(Math.random() * (max - min)) + min;
}

var grannyTalk = function(question) {

    if (question === question.toLowerCase()) {
        console.log('SPEAK UP SONNY JIM'); 

    } else if (question === question.toUpperCase() && (question !== 'BYE')) {
        console.log('NO, NOT SINCE ' + year());
    
    } else if (question === 'BYE') {
        console.log("What's that honey, I didn't hear you...");
    }
};


// math.floor
// math.random

// var year = function () {
//     min = 1930
//     max = 1950
// return Math.floor(Math.random() * (max - min)) + min;
// }