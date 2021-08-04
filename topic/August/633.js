/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let left = 0
  let right = Math.floor(Math.sqrt(c))
  while (left <= right) {
    let item = left * left + right * right
    if (item === c) return true
    else if (item < c) {
      left++
    } else {
      right--
    }
  }
  return false
}

console.log([
  /judgeSquareSum/,
  judgeSquareSum(4),
  judgeSquareSum()
].join("\n"))
