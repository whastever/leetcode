/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
	costs.sort((a,b)=>a-b);
	let count = 0;
	let z = 0;
	for(let i= 0;i<costs.length;i+=1){
		count += costs[i];
		if(count>coins){
			z=i;
			break;
		}
	}
	if(count<=coins) z = costs.length;
	// _costs.reduce((total,value,index)=>{
	// 	if(index ===0){
	// 		if(value<=coins) count=1;
	// 	}else{
	// 		if(total + value <= coins) count = index+1;
	// 	}
	// 	return total + value;
	// },0)
	return z;
};

console.log(maxIceCream([10,6,8,7,7,8],5));
console.log(maxIceCream([1,3,2,4,1],7));
console.log(maxIceCream([1,6,3,1,2,5],20));

