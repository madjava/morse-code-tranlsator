const ConversionError = require('./conversion.error');

module.exports = {
    letterToMorse,
    wordToMorse,
    sentenceToMorse
}


function letterToMorse(value) {
    value = value.toLowerCase();
    const morse = hash[value];
    if (!morse) {
        throw new ConversionError(`Invalid Character: ${value}`);
    }
    return morse;
}

function wordToMorse(word) {
    let morse = [];
    for (let w of word) {
        morse.push(letterToMorse(w));
    }
    return morse.join(' ');
}


function sentenceToMorse(sentence) {
    let newSentence = [];
    try {
        const sentenceArr = sentence.trim().split(' ');
        sentenceArr.forEach(word => {
            newSentence.push(wordToMorse(word));
        });
    } catch (e) {
        if(e instanceof ConversionError){
            return e.message;
        }
    }
    return newSentence.join('   ');
}


const hash = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'u': '..-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    ' ': '   ',
    '.': '.-.-.-',
    '-': '-....-',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'

};

