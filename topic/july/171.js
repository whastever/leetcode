var titleToNumber = function(columnTitle) {
  let ans = 0;
  const ary = Array.from(columnTitle);
  for(let i = ary.length-1;i>=0;i--){
    ans+=((ary[i].charCodeAt()-64)*(26**(ary.length-i-1)))
  }
  return ans
};


titleToNumber('AB')
