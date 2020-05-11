// add solution here
var array = []
function theBeatlesPlay(musicians, instruments) {

    for (let counter = 0; counter < musicians.length; counter ++) {
        i = musicians[counter] + ' plays ' + instruments[counter];
        array.push(i);

    }
    return array
}

