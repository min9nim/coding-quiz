// https://leetcode.com/problems/happy-number/submissions/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = new Map()
  while(true){
    const result = String(n).split('').map(Number).reduce((acc, num) => acc + num*num, 0)
    if(result === 1){
      return true
    }
    if(map.has(result)){
      return false
    }
    map.set(result, true)
    n = result
  }
};


test('happy-number', () => {
  expect(isHappy(19)).toEqual(true)
})
