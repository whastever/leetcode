/**
 * created by WHASTEVER on 2021/2/2.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	const len = s.length;
	if( len === 1 ) return s[0];
	let str = '';
	const _s = s.split('').reverse().join('');
	const getMax = function (str1,str2){
		let _maxStr = '';
		let _str = '';
		let _next = false;
		for (let i = 0; i< str1.length ;i++){
			if(str1[i]===str2[i]) {
				_str = _next ? _str+str1[i]: str1[i];
				_next = true;
			}else{
				_str = '';
				_next = false;
			}
			if(_str === _str.split('').reverse().join('')) {
				_maxStr = _str.length > _maxStr.length ? _str:_maxStr;
			}
		}
		if(_maxStr === _maxStr.split('').reverse().join('')) return _maxStr;
		return '';
	};
	for(let i = 1; i<=2*len-1; i++){
		const f = i<=len;
		const base = f ? s.slice(0,i):s.slice(i-len);
		const _base = f ? _s.slice(-i) : _s.slice(0,2*len-i);
		// console.log(base,_base);
		const sameStr = getMax(base,_base);
		str = sameStr.length>str.length?sameStr:str;
	}
	return str;
};

var str ="abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa";
const res = longestPalindrome(str);

console.log(res);
