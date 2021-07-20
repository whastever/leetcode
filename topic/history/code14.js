/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const c = citations.sort((a, b) => a - b)
  let h = 0


  for (let i = c.length - 1; i >= 0; i--) {
    if (c[i] > h) h++
  }

  console.log(h)
  return h
}


console.log(
  /hIndex/,
  hIndex([3, 0, 6, 1, 5]) === 3,
  hIndex([0, 0, 0, 0, 0, 0]) === 0,
  hIndex([1, 1, 3]) === 1
)
