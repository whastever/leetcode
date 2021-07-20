/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0
  let pointerA = 0, pointerB = 0
  let l = nums.length;
  while (pointerA < l) {
    if (nums[pointerA] !== val) {
      nums[pointerB] = nums[pointerA];
      pointerB++
    }
    pointerA++
  }
  return pointerB
}

console.log([
  /------ removeElement start ------/,
  removeElement([3, 2, 2, 3], 3) === 2,
  removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) === 5,
  /------ end ------/
].join("\n"))
