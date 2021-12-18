// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let flag = 0
  const head = new ListNode()
  let current = head

  while(l1 || l2 || flag){
    const sum = (l1?.val || 0) + (l2?.val || 0) + flag
    current.val = sum%10
    flag = Math.floor(sum/10)

    if(!l1?.next && !l2?.next && !flag){
      break
    }

    if(!l1 && !flag){
      current.next = l2.next
      break
    }
    if(!l2 && !flag){
      current.next = l1.next
      break
    }


    current.next = new ListNode()
    current = current.next

    if(l1){
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }
  }

  return head

};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}



test('add-two-numbers', () => {
  const l1 = {val: 2, next: {val: 4, next: {val:3, next: null}}}
  const l2 = {val: 5, next: {val: 6, next: {val:4, next: null}}}
  const answer = addTwoNumbers(l1, l2)
  expect(answer.val).toEqual(7)
  expect(answer.next.val).toEqual(0)
  expect(answer.next.next.val).toEqual(8)
  expect(answer.next.next.next).toEqual(null)

})
