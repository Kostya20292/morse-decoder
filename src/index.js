const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.split('');
    let result = [];
    let resultString = '';
    for (let i = 0; i < expr.length; i += 10)
        result.push(expr.slice(i, i + 10));
    result
        .map((codeItem) => codeItem.join('').match(/(11|10)/gm))
        .map((decodeItem) =>
            decodeItem === null
                ? ' '
                : decodeItem.map((morseItem) => (+morseItem === 10 ? '.' : '-'))
        )
        .map((symbolItem) =>
            symbolItem === ' '
                ? (resultString += ' ')
                : (resultString +=
                      MORSE_TABLE[[...symbolItem].join('').toString()])
        );
    return resultString;
}

module.exports = {
    decode,
};
