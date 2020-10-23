/**
 * this function receives the character passed and compares
 * it with the alphabet index to assign a value to it.
 * 
 * @param {string} char
 * @returns {number}
 */
const findNumberValue = (char) => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const value = alphabet.indexOf(char);
  return value + 1;
};

module.exports = findNumberValue;