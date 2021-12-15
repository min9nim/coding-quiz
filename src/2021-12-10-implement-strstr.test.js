// https://leetcode.com/problems/implement-strstr/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === ''){
    return 0
  }

  for(let i=0; i<haystack.length - needle.length + 1; i++){
    // console.log('xx', haystack.slice(i, i+needle.length) )
    if(haystack.slice(i, i+needle.length) === needle){
      return i
    }
  }
  return -1

};

test('strStr', () => {
  expect(strStr('hello', 'll')).toEqual(2)
})
