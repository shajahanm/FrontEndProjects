function bubbleSort(arr) {
  let arrayLength = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrayLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
function bubbleSortForLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}
const numbers = [5, 3, 8, 4, 2, 10, 1, -1, -5];
console.log(bubbleSortForLoop(numbers));
