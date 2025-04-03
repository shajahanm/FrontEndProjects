function findMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(findMinMax([30, 20, 5, 40])); // Output: { min: 5, max: 40 }
