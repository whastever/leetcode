/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {

	return '';
};

console.log(
	countOfAtoms('K4(ON(SO3)2)2'),
	countOfAtoms('K4(ON(SO3)2)3(OH)2'),

	countOfAtoms('Mg(OH)2'),
	countOfAtoms('H2O'),
);


`
对于括号序列相关的题目，通用的解法是使用递归或栈。本题中我们将使用栈解决。

从左到右遍历该化学式，并使用哈希表记录当前层遍历到的原子及其数量，因此初始时需将一个空的哈希表压入栈中。对于当前遍历的字符：

如果是左括号，将一个空的哈希表压入栈中，进入下一层。

如果不是括号，则读取一个原子名称，若后面还有数字，则读取一个数字，否则将该原子后面的数字视作 1。然后将原子及数字加入栈顶的哈希表中。

如果是右括号，则说明遍历完了当前层，若括号右侧还有数字，则读取该数字 num，否则将该数字视作 1。
然后将栈顶的哈希表弹出，将弹出的哈希表中的原子数量与 num 相乘，加到上一层的原子数量中。

遍历结束后，栈顶的哈希表即为化学式中的原子及其个数。
遍历哈希表，取出所有「原子-个数」对加入数组中，对数组按照原子字典序排序，然后遍历数组，按题目要求拼接成答案。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/number-of-atoms/solution/yuan-zi-de-shu-liang-by-leetcode-solutio-54lv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
`
