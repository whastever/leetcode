/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let cluster = {};
  for (let item of times){
    if(!cluster[item[0]]) cluster[item[0]] = [];
    if(item[1] === k) return -1
    cluster[item[0]].push([item[1],item[2]])
  }

}


console.log([
  /networkDelayTime/,
  networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2) === 2,
  networkDelayTime([[1, 2, 1]], 2, 1) === 1,
  networkDelayTime([[1, 2, 1]], 2, 2) === -1
].join("\n"))
