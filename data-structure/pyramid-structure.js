/**
 * Generates a pyramid pattern with the given number of levels.
 * @param {number} count - The number of pyramid levels.
 * @param {string} character - The character to print
 * @param {string} direction - The direction of the pyramid
 */
function generatePyramid(count, character, direction = "up") {
  let spaces = "";
  let stars = "";
  if (direction !== "up" && direction !== "down") {
    return console.error("Please choose up or down");
  }
  if (direction === "up") {
    for (let i = 0; i < count; i++) {
      spaces = " ".repeat(count - i - 1);
      stars = character.repeat(2 * i + 1);
      console.log(spaces + stars);
    }
  } else {
    for (let i = count - 1; i >= 0; i--) {
      spaces = " ".repeat(count - i - 1);
      stars = character.repeat(2 * i + 1);
      console.log(spaces + stars);
    }
  }
}
generatePyramid(10, "#", "down");
