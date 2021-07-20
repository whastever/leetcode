/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, numRows) {
  if (numRows === 1) return s
  let ans = new Array(numRows).fill('')
  for (let i = 0; i < s.length; i++) {
    let Mod = i % (2 * numRows - 2)
    let y = Mod - numRows + 1 > 0 ? 2 * numRows - 2 - Mod : Mod
    ans[y] += s[i]
  }
  return ans.join("")
}

var convert = function(s, numRows) {
  if (numRows === 1) return s
  let ans = new Array(numRows).fill(''),y = 0;
  for (let i = 0; i < s.length; i++) {
    ans[y] += s[i]
    let tag = i % (2 * numRows - 2) - numRows + 1
    y+=( tag  >= 0 ? -1 : 1)
  }
  return ans.join("")
}


console.log([
  /convert/,
  convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR",
  convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI",
  convert("A", 1) === "A"

].join("\n"))


//   `
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// `
