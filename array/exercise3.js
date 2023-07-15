/*
  exercise: https://es.javascript.info/array#subarray-maximo
 */

function getMaxSubSum(arr) {
  let currentSum = [];
  let maxSum = [];

  for ( let num of arr ) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  if (maxSum < 0) return 0

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) === 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
console.log(getMaxSubSum([1, 2, 3]) === 6);
console.log(getMaxSubSum([-1, -2, -3]) === 0);