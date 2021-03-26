/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	const l = nums.length;
	if(l<=2) return  false;
	for (let i = 1; i<l-1;i++){
		console.log(nums[i]);
		if(nums[i]>nums[i-1] && nums[i]<nums[i+1]) return true;
	}
	return false;
}

const a = [20,100,10,12,5,13];
console.log(increasingTriplet(a));
