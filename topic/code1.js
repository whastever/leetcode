/**
 * created by WHASTEVER on 2021/2/1.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let arr = [];
	for(var i = 0;i < nums.length;i++ ){
		var dif = target - nums[i];
		if(arr[dif] !== undefined){
			//在前面的循环保存的数组中找到差值便返回
			return [arr[dif],i];
		}
		//保存整数及下标
		arr[nums[i]] = i;
	}
};



const ary = [3,2,4];
const t = 6;

const  res = twoSum(ary,t);
console.log(res);
