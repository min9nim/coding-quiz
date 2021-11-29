/*
* https://leetcode.com/problems/roman-to-integer/
* */

var romanToInt = function(s) {
  let sum = 0
  const nums = s.split('').map(charToNum)

  for(let i=0; i < s.length; i++){
    if(s[i] === 'V' || s[i] === 'L' || s[i] === 'D'){
      sum += nums[i]
    }else if(nums[i+1] > nums[i]){
      sum -= nums[i]
      sum += nums[i+1]
      i++
    }else if(nums[i+2] > nums[i+1] && nums[i] === nums[i+1]){
      sum -= nums[i]*2
      sum += nums[i+2]
      i += 2
    }else{
      sum += nums[i]
    }
  }
  return sum
};



var charToNum = c => {
  switch(c){
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      throw Error('Invalid character')
  }
}

test('romanToInt', () => {
  expect(romanToInt('III')).toEqual(3)
  expect(romanToInt('IV')).toEqual(4)
  expect(romanToInt('IX')).toEqual(9)
  expect(romanToInt('LVIII')).toEqual(58)
  expect(romanToInt('MCMXCIV')).toEqual(1994)
})
