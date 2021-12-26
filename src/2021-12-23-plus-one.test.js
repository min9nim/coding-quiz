// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let over = 0
  digits[digits.length-1] += 1
  for(let i=digits.length-1; i >= 0; i--){
    const sum = digits[i] + over
    if(sum < 10){
      digits[i] = sum
      over = 0
      break
    }else{
      digits[i] = sum - 10
      over = 1
    }
  }
  if(over > 0){
    digits.splice(0,0,1)
  }
  return digits
};


test('plus-one', () => {
  expect(plusOne( [1,2,3])).toEqual([1,2,4])
  expect(plusOne( [4,3,2,1])).toEqual([4,3,2,2])
  expect(plusOne( [9])).toEqual([1,0])
})
