/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
	const base = [1,2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576,2097152];
	let de = [];
	let count = 0;
	deliciousness.forEach(i=>de[i]=de[i]?de[i]+1:1)
	deliciousness.sort((a,b)=>a-b);
	for(let i = 0;i<deliciousness.length;i+=1){
		let item = deliciousness[i];
		if(de[item]){
			for(let m = 0 ;m<=22;m+=1){
				let diff = base[m]-item;
				if(de[diff]) {
					if (diff === item){
						let l = de[diff];
						count += (l*(l-1)*0.5)
						console.log(item,diff,(l*(l-1)*0.5),base[m]);

					}else{
						count += de[item] * de[diff];
						console.log(item,diff,de[item] * de[diff],base[m]);

					}
					// console.log(/item/,item,de[item],/diff/,diff,de[diff]);
					// console.log(/count/,count);

				}
			}
			de[item]=null;
		}
	}

	console.log(count);
	return count;

};

// countPairs([0,1,1,1,1,1,3,3,3,5,8]);
//
// countPairs([1,3,5,7,9]);

// countPairs([149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234]);

// countPairs([1048576,1048576])
countPairs(new Array(100000).fill(32))

