/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {

  // 排序 + 双指针 ：
  // 若设三边为c >= b >= a，如果每次都先固定最大值c，那么 c > b - a恒成立（即使是b = c，a = 0的特殊情况，因为不符合c < a + b，
  // 在后面的判断中也会被剔除，所以姑且认为恒成立），只要用双指针确定 c < a + b的数量即可。
  // 使用双指针的时候，若 c >= a + b，则只能增大a；若c < a + b，则[a + i, b] (i >= 0 && a+i < b) 都是符合要求的解，之后缩小b，进行下一次判断。
  nums.sort((a, b) => a - b)
  let ret = 0
  for (let i = nums.length - 1; i > 1; --i) {
    let target = nums[i]
    let left = 0
    let right = i - 1
    while (left < right) {
      if (nums[left] + nums[right] <= target) {
        left++
      } else {
        ret += right - left
        right--
      }
    }
  }
  return ret
}

const binarySearch = function(nums, left, right, k) {
  let l = left, r = right
  while (l < r) {
    let mid = (l + r) >> 1
    if (nums[l] > k) r = mid
    else l = mid
  }
  return 0
}

console.log([
  /triangleNumber/,
  triangleNumber([2, 2, 3, 4]) === 3,
  triangleNumber()
].join("\n"))
