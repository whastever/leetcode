/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
  let s = new Set([0]);
  let sum = 0, res = 0;
  for(let n of nums) {
    sum += n;
    if(s.has(sum - target)) {
      res ++;
      s.clear();
    }
    s.add(sum);
  }
  return res;
}


// 返回 非空不重叠 子数组的最大数目，且每个子数组中数字和都为 target
console.log([
  /maxNonOverlapping/,
  maxNonOverlapping([-1, 3, 5, 1, 4, 2, -9], 6) === 2,
  maxNonOverlapping([0, 0, 0], 0) === 3,
  maxNonOverlapping([-2, 6, 6, 3, 5, 4, 1, 2, 8], 10) === 3
].join("\n"))
