/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0, high = nums.length - 1, l = nums.length
  if (nums[0] > target || !l) return 0
  if (nums[l - 1] < target) return l
  while (low <= high) {
    var mid = parseInt((high + low) / 2)
    if (target === nums[mid] || (target < nums[mid + 1] && target > nums[mid - 1])) {
      return mid
    } else if (target > nums[mid]) {
      low = mid + 1
    } else if (target < nums[mid]) {
      high = mid - 1
    }
  }
}

console.log([
  /------ searchInsert start ------/,
  searchInsert([1, 3, 5, 6], 5) === 2,
  searchInsert([1, 3, 5, 6], 2) === 1,
  searchInsert([1, 3, 5, 6], 7) === 4,
  searchInsert([1, 3, 5, 6], 0) === 0,
  /------ end ------/
].join("\n"))
