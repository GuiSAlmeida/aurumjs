/**
 * @param {string} text
 * @param {number} limit
 * @return {string}
 */
const removeRepeated = (text, limit) => {
  if (typeof text != 'string') {
    return console.log('Valor inválido!')
  } else {
    const parsedText = text.toLowerCase().split("");
    const result = parsedText.reduce((newText, char) => {
      if (newText[newText.length - 1] !== char) {
        return newText.concat(char);
      } else if (newText[newText.length - limit] !== char) {
        return newText.concat(char);
      } else {
        return newText;
      }
    }, '');

    return result;
  }
}

console.log(removeRepeated('xxxyzzaaayy', 1)); // 'xyzay'
console.log(removeRepeated('xxxyzzaaayy', 2)); // 'xxyzzaayy'
