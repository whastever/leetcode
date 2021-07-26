/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 0, space = null
  while (i < nums.length) {
    if (nums[i] !== 0) {
      space = nums[j]
      nums[j] = nums[i]
      nums[i] = space
      j++
    }
    i++
  }
  console.log(nums)
}

console.log([
  moveZeroes([0, 1, 0, 3, 12])
].join("\n"))

/**
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 *  说明:
 *  1.必须在原数组上操作，不能拷贝额外的数组。
 *  2.尽量减少操作次数。
 */
