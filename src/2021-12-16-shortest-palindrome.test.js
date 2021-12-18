// https://leetcode.com/problems/shortest-palindrome/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const r = s.split('').reverse().join('')
  for (let i = s.length; i > 0; i--) {
    if (s.slice(0, i) === r.slice(s.length - i)) {
      return r.slice(0, r.length - i) + s
    }
  }
  return ''
}

test('shortest-palindrome', () => {
  expect(shortestPalindrome('aacecaaa')).toEqual('aaacecaaa')
  expect(shortestPalindrome('abcd')).toEqual('dcbabcd')
})
