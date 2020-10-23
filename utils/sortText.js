/**
 * this function converts the string passed
 * to array for ordering and returning it
 * 
 * @param {string} text
 * @returns {array}
 */

const sortText = (text) => {
  const parsedText = text.toLowerCase().split("");
  parsedText.sort((a, b) => {
    return a.localeCompare(b);
  })
  return parsedText;
};

module.exports = sortText;
