// add solution here

function theBeatlesPlay(musicians, instruments) {
    var array = []
    for (let counter = 0; counter < musicians.length; counter ++) {
        i = musicians[counter] + ' plays ' + instruments[counter];
        array.push(i);

    }
    return array
}

console.log(theBeatlesPlay);
