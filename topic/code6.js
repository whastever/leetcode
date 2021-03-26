/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
	const l = nums.length;
	if(l<3)return false;
	for(let x = 0; x<l-2;x++){
		for(let y =x+1 ;y<l-1;y++){
			if(nums[y]>=nums[x]+2){
				for(let z= y+1;z<l;z++){
					if(nums[z]>nums[x] && nums[z]<nums[y]){
						console.log([x,y,z],[nums[x],nums[y],nums[z]]);
						return true;
					}
				}
			}
		}
	}
	return false;
};


var ex = [-1, 3, 2, 0]
console.log(find132pattern(ex));
