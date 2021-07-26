/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let i = 0, j = nums.length - 1, ans = []
  for (let n = nums.length - 1; n >= 0, i <= j; n--) {
    let ri = nums[i] * nums[i]
    let rj = nums[j] * nums[j]
    if (ri < rj) {
      ans[n] = rj
      j--
    } else {
      ans[n] = ri
      i++
    }
  }
  return ans
}

console.log([
  /sortedSquares/,
  sortedSquares([-4, -1, 0, 3, 10]) === [0, 1, 9, 16, 100],
  sortedSquares([-7, -3, 2, 3, 11]) === [4, 9, 9, 49, 121]

].join("\n"))
