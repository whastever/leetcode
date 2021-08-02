/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let ans = 0
  let m = grid.length, n = grid[0].length
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      let isLand = grid[i][j]
      console.log([i, j], ans)
      if (isLand) {
        let top = grid[i][j - 1] ? -1 : 1
        let left = (grid[i - 1] || [])[j] ? -1 : 1
        ans += (top + left + 2)
      }
    }
  }
  return ans
}

console.log([
  /islandPerimeter/,
  islandPerimeter([[1]]) === 4,
  islandPerimeter([[1, 0]]) === 4,
  islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]) === 16
].join("\n"))
