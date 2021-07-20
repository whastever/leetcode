/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // let left = 0, right = nums.length - 1
  // while (left <= right) {
  //
  //   let mid = Math.floor((left + right) / 2)
  //   console.log(left,right,mid);
  //   if (nums[mid] === target) return mid
  //   if (nums[mid] > target) right = mid - 1
  //   else left = mid + 1
  // }
  // return -1

  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) r = mid - 1
    else l = mid + 1
  }
  return -1
}
console.log(
  search([-1, 0, 3, 5, 9, 12], 9)
)
