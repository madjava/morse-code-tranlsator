module.exports = {
    letterToMorse,
    wordToMorse,
    sentenceToMorse
}


function letterToMorse(value) {
    value = value.toLowerCase();
    return hash[value] || undefined;
}

function wordToMorse(word) {
    let morse = [];
    for (let w of word) {
        morse.push(letterToMorse(w));
    }
    return morse.join(' ');
}


function sentenceToMorse(sentence) {
    let newSentence = []
    const sentenceArr = sentence.split(' ');
    sentenceArr.forEach(word => {
        newSentence.push(wordToMorse(word));
    });
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
    ' ': '   '
};

