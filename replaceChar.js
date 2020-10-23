const getPreviowsChar = require('./utils/getPreviowsChar');

/**
 * @param {string} text
 * @param {number} times
 * @return {string}
 */
const replaceChar = (text, times) => {
  if (typeof text != 'string' || typeof times != 'number') {
    return console.log('Valor inválido!')
  } else {
    let parsedText = text.toLowerCase().split("");

    const newText = parsedText.map((char, index) => {
      const previowsChar = getPreviowsChar(parsedText, index)
      if (char !== "?") {
        return char;
      }
      return Array(times).fill(previowsChar);
    });
    return newText.join("").replace(/,/g, "");
  }
};

console.log(replaceChar("x?yzza?y?", 1)); // "xxyzzaayy"
console.log(replaceChar("x?yzza?y?", 2)) // "xxxyzzaaayyy"
console.log(replaceChar("?x?yzza?y?", 2)); // "yyxxxyzzaaayyy"
