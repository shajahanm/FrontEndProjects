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

  for (
    let i = direction === "up" ? 0 : count - 1;
    i < direction === "up" ? count : count >= 0;
    direction === "up" ? i++ : i--
  ) {
    spaces = " ".repeat(count - i - 1);
    stars = character.repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}
generatePyramid(10, "#", "up");
