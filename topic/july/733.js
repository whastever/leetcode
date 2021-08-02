/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const dx = [0, 1, 0, -1], dy = [-1, 0, 1, 0]
  if (image[sr][sc] === newColor) return image
  const n = image.length, m = image[0].length
  const currColor = image[sr][sc]
  // BFS
  let queue = [[sr, sc]]
  image[sr][sc] = newColor
  while (queue.length > 0) {
    let p = queue.shift()
    for (let i = 0; i < 4; ++i) {
      let _sr = p[0] + dx[i], _sc = p[1] + dy[i];
      if ( _sr >= 0 && _sc >= 0 && _sr < n && _sc < m && image[_sr][_sc] === currColor) {
        queue.push([_sr, _sc])
        image[_sr][_sc] = newColor
      }
    }
  }
  return image
  // DFS

}

console.log([
  /floodFill/,
  floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)

].join("\n"))
