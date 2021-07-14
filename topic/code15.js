/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums.length
  let pointerA = 0, pointerB = 0
  while (pointerA < nums.length) {
    if (nums[pointerA] !== nums[pointerA + 1]) {
      nums[pointerB] = nums[pointerA]
      pointerB++
    }
    pointerA++
  }

  return pointerB
}
var removeDuplicates2 = function(nums) {
  let i = 0, l = nums.length - 1
  while (i < l) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
      l = nums.length - 1
    } else {
      i++
    }
  }
  console.log(nums)
  return nums.length
}

console.log(
  /removeDuplicates/,
  removeDuplicates([1, 1, 2]),
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
)

// 双指针
