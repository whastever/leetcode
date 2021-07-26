/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
  return 0;
}

/**
 * Prompt
 * 1. The problem can be reduced to computing Longest Common Subsequence between both arrays.
 * 2. Since one of the arrays has distinct elements, we can consider that these elements describe an arrangement of numbers, and we can replace each element in the other array with the index it appeared at in the first array.
 * 3. Then the problem is converted to finding Longest Increasing Subsequence in the second array, which can be done in O(n log n).
 */

console.log([
  /minOperations/,
  minOperations([5, 1, 3], [9, 4, 2, 3, 4]) === 2,
  minOperations([6, 4, 8, 1, 3, 2], [4, 7, 6, 2, 3, 8, 6, 1]) === 3
].join("\n"))
