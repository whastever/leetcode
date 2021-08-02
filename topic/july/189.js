/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let l = nums.length, i = 0
  while (i < (k % l)) {
    nums.unshift(nums.pop(nums[l - 1]))
    i++
  }
  console.log(nums)

}

console.log(
  rotate([1, 2, 3, 4, 5, 6, 7], 3)
)
