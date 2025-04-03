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

const sampleArray = [64, 10, 34, 50, 90, 12, 3, 39, 1];
const largest = findLargest(sampleArray);
const minimum = findMinimum(sampleArray);
const secondLargest = findSecondLargestNumber(sampleArray);
console.log(minimum + " " + "Minimum");
console.log(largest + " " + "Maximum");
console.log(secondLargest + " " + "Second Largest");
