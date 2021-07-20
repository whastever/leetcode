/**
 * @param {number[]} arr
 * @return {number}
 * 1846
 *
 * 正整数数组，第一个元素为1，相邻绝对值<=1，
 * 执行以下 2 种操作任意次
 *
 * 1. 减小 arr 中任意元素的值，使其变为一个 更小的正整数 。
 * 2. 重新排列 arr 中的元素，你可以以任意顺序重新排列
 *
 * 求最大值
 */

var m = function(arr) {
  if (arr.length === 1) return 1
  arr.sort((a, b) => a - b)
  arr[0] = 1
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.min(arr[i],arr[i-1]+1)
  }
  return arr[arr.length-1]
}
  console.log([
    /maximumElementAfterDecrementingAndRearranging/,
    m([2, 2, 1, 2, 1]) === 2,
    m([100, 1, 1000]) === 3,
    m([1, 2, 3, 4, 5]) === 5

  ].join("\n"))
