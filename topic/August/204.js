/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0
  let ans = 1
  for (let i = 3; i < n; i += 2) {
    if (i === 3 || i === 5 || i === 7) ans++
    else if (i % 3 && i % 5 && i % 7) ans++
  }
  return ans
}

console.log([
  /countPrimes/,
  countPrimes(10),
  countPrimes(2),
  countPrimes(3),
].join("\n"))
