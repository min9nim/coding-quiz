/*
* https://leetcode.com/problems/longest-common-prefix/
*/

var longestCommonPrefix = function(strs) {
  if(strs.length === 1){
    return strs[0]
  }
  let i = 0
  while(true){
    for(let j=0; j<strs.length-1; j++){
      if(!strs[j][i] || strs[j][i] !== strs[j+1][i]){
        return strs[0].slice(0,i)
      }
    }
    i++
  }
};



test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl')
  expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('')
  expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('')
  expect(longestCommonPrefix(["dog"])).toEqual('dog')
  expect(longestCommonPrefix([""])).toEqual('')
})
