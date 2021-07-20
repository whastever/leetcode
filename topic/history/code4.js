/**
 * created by WHASTEVER on 2021/2/2.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let ary = [...nums1,...nums2].sort((a,b)=>a-b);
	const l = ary.length;
	if (l === 0) return  0;
	if (l === 1) return ary[0];
	if(l%2){
		return ary[(l-1)/2]
	}else{
		return (ary[l/2]+ary[l/2-1])/2
	}
};

var nums1 = [1,3], nums2 = [2,4];
const res = findMedianSortedArrays(nums1,nums2);

console.log(res);
