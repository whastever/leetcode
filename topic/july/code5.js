/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  if (nums.length === 1) return 1
  nums.sort((a, b) => b - a)
  let diff = []
  for (let i = 0; i < nums.length; i++) {
    if (i !== (nums.length - 1)) {
      diff.push(nums[i] - nums[i + 1])
    }
  }
  let i = 0, l = diff.length, max = 0
  while (i < l) {
    let count = 0, _max = 0, _count = 0
    for (let m = i; m < l; m++) {
      _count += diff[m]
      count += _count
      if (count <= k) _max++
      else break
    }
    console.log(count)
    max = Math.max(_max, max)
    i++
  }
  console.log(nums, diff)

  return max + 1
}


var maxF = (nums, k) => {
  nums.sort((a, b) => a - b)
  // 初始化滑动窗口,论如何，答案至少为 1，初始化 ans = 1
  let n = nums.length, l = 0, r = 1, ans = 1
  while (r < n) {
    // 右边界右移一步，新添加的面积要用 k 来弥补
    k -= ((nums[r] - nums[r - 1]) * (r - l))
    if (k >= 0) {
      ans = r - l + 1//符合题意的答案
    } else {
      // 左边界右移一步，减少的面积可以补充 k 的值
      k += (nums[r] - nums[l++])
    }
    // 滑动窗口的 r 一直在向右边移动
    r++
  }
  return ans

}

console.log([
  /maxFrequency/,
  maxF([1, 2, 4], 5) === 3,
  maxF([1, 4, 8, 13], 5) === 2,
  maxF([3, 9, 6], 2) === 1,
  maxF([9940, 9995, 9944, 9937, 9941, 9952, 9907, 9952, 9987, 9964, 9940, 9914, 9941, 9933, 9912, 9934, 9980, 9907, 9980, 9944, 9910, 9997], 7925)
].join("\n"))

