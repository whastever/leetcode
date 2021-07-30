/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  const ans = [label]
  if (label === 1) return ans
  let threshold = 1, index = 0
  while (threshold * 2 <= label) {
    threshold = threshold * 2
    index++
  }
  let diff = index % 2 ? 2 * threshold - label : label - threshold + 1
  console.log(threshold,index,diff);
  while (index > 1) {
    diff = Math.ceil(diff / 2)
    index -= 1
    threshold = threshold / 2
    console.log(threshold,index,diff);
    let item = index % 2 ? 2 * threshold - diff : threshold + diff - 1
    ans.unshift(item)
  }
  ans.unshift(1)
  console.log(ans);
  return ans
}

console.log([
  /pathInZigZagTree/,
  pathInZigZagTree(14).toString() === [1, 3, 4, 14].toString(),
  pathInZigZagTree(26).toString() === [1, 2, 6, 10, 26].toString(),
  pathInZigZagTree(9)
].join("\n"))

const fnPipe = (...fns) => (arg) =>fns.reduce((result, item) => item(result), arg)
