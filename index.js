// add solution here
const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']


function theBeatlesPlay(musicians, instruments) {
    array = []
    for (let counter = 0; counter < musicians.length; counter ++) {
        i = musicians[counter] + ' plays ' + instruments[counter];
        array.push(i);

    }
    return array
}

console.log(theBeatlesPlay(musicians, instruments))