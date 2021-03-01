/**
 * created by WHASTEVER on 2021/2/1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	if (!s) return 0;
	let _max = 1;
	let _str = s[0];
	for (let i = 1;i<s.length;i++){
		const _index = _str.indexOf(s[i]);
		if(_index>-1){
			_str = (_str.slice(_index+1)||'') + s[i];
		}else{
			_str +=s[i];
		}
		_max = Math.max(_str.length,_max);

	}
	return _max;
};

var str ="dvdf";
const res = lengthOfLongestSubstring(str);

console.log(res);
