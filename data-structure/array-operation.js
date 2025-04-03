const findLargest = (arr) => {
  return Math.max(...arr);
};
const findMinimum = (arr) => {
  return Math.min(...arr);
};
const findSecondLargestNumber = (arr) => {
  if (arr.length < 2) return null;

  let first = -Infinity,
    second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
};
const quickSort = (arr) => {
  if (arr.length <= 1) return arr; // Base case

  const pivot = arr[arr.length - 1]; // Choosing last element as pivot
  const left = []; // Elements smaller than pivot
  const right = []; // Elements greater than pivot

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const sampleArray = [64, 10, 34, 50, 90, 12, 3, 39, 1];
const largest = findLargest(sampleArray);
const minimum = findMinimum(sampleArray);
const secondLargest = findSecondLargestNumber(sampleArray);
console.log(minimum + " " + "Minimum");
console.log(largest + " " + "Maximum");
console.log(secondLargest + " " + "Second Largest");
console.log(quickSort(sampleArray) + " " + "Quick sort");
