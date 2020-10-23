/**
 * This function goes through the array 
 * to check the previous letter that has no undefined or '?' value,
 * and returns the letter.
 * 
 * @param {array} array 
 * @param {number} index 
 * @returns {string}
 */
const getPreviowsChar = (array, index) => {
  let previowsChar = '';
  const size = array.length;

  if (array[index - 1] === undefined) {
    for (let i = 1; i <= size; i++) {
      if (array[size - i] !== "?") {
        previowsChar = array[size - i];
        break;
      }
    }
  } else if (array[index - 1] === "?") {
    for (let i = 1; i <= index; i++) {
      if (array[index - i] !== "?") {
        previowsChar = array[index - i];
        break;
      } else {
        for (let i = 1; i <= size; i++) {
          if (array[size - i] !== "?") {
            previowsChar = array[size - i];
            break;
          }
        }
      }
    }
  } else {
    previowsChar = array[index - 1];
  }
  return previowsChar;
}

module.exports = getPreviowsChar;