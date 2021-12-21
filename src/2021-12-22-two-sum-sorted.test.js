// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const map = new Map()
  for(let i=0; i<numbers.length; i++){
    if(map.has(numbers[i])){
      return [map.get(numbers[i]), i+1]
    }else{
      map.set(target - numbers[i], i+1)
    }
  }
};


test('two-sum-sorted', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([1,2])
})
