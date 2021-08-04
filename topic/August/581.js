/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray1 = function(nums) {
  let _nums = [...nums].sort((a, b) => a - b)
  let start = null, end = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== _nums[i] && start === null) {
      start = i
    }
    if (nums[nums.length - 1 - i] !== _nums[nums.length - 1 - i] && end === null) {
      end = nums.length - 1 - i
    }
    if (start && end) break
  }
  console.log(start, end)
  return start === end ? 0 : end - start + 1
}

var findUnsortedSubarray = function(nums) {
  let l = nums.length
  if (l <= 1) return 0
  let start = 0, end = l - 1, left = false, right = false
  let pointer = 1
  while (left === false && pointer <= l) {
    if (nums[pointer] >= nums[pointer - 1]) {
      pointer++
    } else {
      if (nums[start] <= nums[pointer]) start++
      else left = true
    }
  }
  let pointers = l - 2
  while (right === false && pointers >= 0) {
    if (nums[pointers] <= nums[pointers + 1]) {
      pointers--
    } else {
      if (nums[end] >= nums[pointers]) end--
      else right = true
    }
  }
  console.log(start, end)
  console.log(left, right)
  if (left && right) return end - start + 1
  return 0

}

var fin = (nums) => {
  const n = nums.length
  let maxn = -Number.MAX_VALUE, right = -1
  let minn = Number.MAX_VALUE, left = -1
  for (let i = 0; i < n; i++) {
    if (maxn > nums[i]) {
      right = i
    } else {
      maxn = nums[i]
    }
    if (minn < nums[n - i - 1]) {
      left = n - i - 1
    } else {
      minn = nums[n - i - 1]
    }
  }
  return right === -1 ? 0 : right - left + 1

}

console.log([
  /findUnsortedSubarray/,
  findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]) === 5,
  // findUnsortedSubarray([1, 2, 3, 4]) === 0,
  // findUnsortedSubarray([5, 4, 3, 2, 1]) === 5,
  findUnsortedSubarray([1, 3, 5, 4, 2]) === 5
  // findUnsortedSubarray([1,2]) === 5,
  // findUnsortedSubarray([1, 2, 3, 5, 4]) === 2
].join("\n"))
