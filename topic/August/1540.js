/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function(s, t, k) {
  if (s.length !== t.length) return false
  const N = s.length
  let map = new Map(), max = 0
  for (let i = 0; i < N; i++) {
    let a = s.charCodeAt(i)
    let b = t.charCodeAt(i)
    if (a === b) continue
    let dist = (b - a) > 0 ? b - a : b - a + 26
    map.set(dist, (map.get(dist) || 0) + 1)
    max = Math.max(max, dist + 26 * (map.get(dist) - 1))
  }
  return max <= k
}


console.log([
  /canConvertString/,
  canConvertString("input", "ouput", 9),
  canConvertString("aab", "bbb", 27),
  canConvertString("smgzrbq", "npotkmy", 23)
].join("\n"))
