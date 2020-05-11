// add solution here
const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
    var array = []
    for (let counter = 0; counter < musicians.length; counter ++) {
        let item = musicians[counter] + ' plays ' + instruments[counter];
        array.push(item);

    }
    return array
}

console.log(theBeatlesPlay(musicians, instruments));

function johnLennonFacts() {
  
}