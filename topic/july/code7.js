/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let data = {}
  for (let i = 0; i < group.length; i++) {
    let item = [...strs[i]].sort().join("")
    if (data[item]) {
      data[item].push(strs[i])
    } else {
      data[item] = [strs[i]]
    }
  }
  let ans = []
  for (let i in data) {
    ans.push(data[i])
  }
  return ans
}

console.log([
  /groupAnagrams/,
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
].join("\n"))
