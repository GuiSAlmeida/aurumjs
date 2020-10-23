const sortText = require('./utils/sortText');
const findNumberValue = require('./utils/findNumberValue');

/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}
 */
const lettersSum = (text1, text2) => {
  if (typeof text1 != 'string' || typeof text2 != 'string') {
    return console.log('Valor inválido!')
  } else {
    const orderedText1 = sortText(text1);
    const orderedText2 = sortText(text2);
    const smaller1 = findNumberValue(orderedText1[0]);
    const smaller2 = findNumberValue(orderedText2[0]);
    const bigger1 = findNumberValue(orderedText1[orderedText1.length - 1]);
    const bigger2 = findNumberValue(orderedText2[orderedText2.length - 1]);

    const result = (bigger1 * smaller2) + (bigger2 * smaller1);
    return result;
  }
};

console.log(lettersSum('dacb', 'gdab')); //11
console.log(lettersSum('dcb', 'gdab')); //18
