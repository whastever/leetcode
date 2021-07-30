/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  // 双指针
  let l = 0, r = numbers.length - 1, diff = null
  while (l < r) {
    diff = numbers[l] + numbers[r] - target
    if (diff === 0) return [l + 1, r + 1]
    if (diff < 0) l++
    else r--
  }
}

var twoSum1 = function(numbers, target) {

  const dichotomy = (start, value) => {
    let left = start, right = numbers.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) * 0.5)
      if (numbers[mid] === value) return mid
      if (numbers[mid] > value) right = mid - 1
      else left = mid + 1
    }
    return null
  }
  for (let i = 0; i < numbers.length; i++) {
    let end = dichotomy(i + 1, target - numbers[i])
    if (end !== null) return [i + 1, end + 1]
  }
}


console.log([
  twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8),
  twoSum([0, 1, 0, 3, 12], 4),
  twoSum([2, 7, 11, 15], 9),
  twoSum([2, 3, 4], 6),
  twoSum([-1, 0], -1)
].join("\n"))
