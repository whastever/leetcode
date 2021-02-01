/**
 * created by WHASTEVER on 2021/2/1.
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
	let diff = 0;
	const maxLength = Math.max(A.length,B.length);
	for(var i = 0; i<maxLength; i++){
		diff += ((A[i]||0)-(B[i]||0))
	}
	for (var m = A.length-1; m>=0; m--){
		for (var n = B.length-1; n>=0; n--){
			if((A[m]-B[n])*2  === diff) return [A[m],B[n]]
		}
	}
};

// const res = fairCandySwap([1,1],[2,2]);
// const res = fairCandySwap([1,2,5],[2,4]);
// const res = fairCandySwap([1,2],[2,3]);
const res = fairCandySwap([21,89,90,88,54,45,67,41,57,7],[55,57,22,19,44,91,100,71,33,33]);


console.log(res);
