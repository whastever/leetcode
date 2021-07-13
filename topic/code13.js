/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubArraysWithSum = function(nums, goal) {

	let offset = 0;
	if(goal>0){
		for (let i = 0; i<goal;i+=1){
			offset += nums[i]
		}
	}


	return '';
};




console.log(
	/numSubArraysWithSum/,
	numSubArraysWithSum([1,0,1,0,1],2) === 4,
	numSubArraysWithSum([0,0,0,0,0],0) === 15
);




