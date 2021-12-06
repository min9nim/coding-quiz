// https://leetcode.com/problems/valid-parentheses/
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function (s) {
  const stack = []
  for (const c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    }
    if (c === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        return false
      }
    }
    if (c === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    }
    if (c === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

test('valid-parentheses', () => {
  expect(isValid('()[]')).toEqual(true)
  expect(isValid('()[')).toEqual(false)
  expect(isValid('((){}[)')).toEqual(false)
  expect(isValid('((){}{[[()]]})')).toEqual(true)
})
