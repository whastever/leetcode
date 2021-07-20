/**
 * created by WHASTEVER on 2021/2/1.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 链表

 function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let next = 0;
	let res = [];

	const length = Math.max(l1.length,l2.length);
	for (let i = 0; i<length;i++){
		const n1 = l1[i]||0;
		const n2 = l2[i]||0;
		const count = n1+n2;
		if(count>=10){
			res.push(count+next-10);
			next = 1;
		}else{
			if (next === 1 && count === 9){
				res.push(0);
				next = 1;
			}else {
				res.push(count+next);
				next = 0;
			}
		}
	}
	if (next === 1) res.push(1);
	return res;
};

var l1 = [2,4,3], l2 = [5,6,4]
// var l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
const res= addTwoNumbers(l1,l2);
console.log(res);
