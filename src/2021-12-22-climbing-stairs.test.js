// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n===1){
    return 1
  }
  if(n===2){
    return 2
  }

  let c
  for(let a=1, b=2, i=3; ; i++){
    c = a + b
    if(i === n){
      break
    }
    a = b
    b = c
  }
  return c

};


// fn(n) = f(n-1) + fn(n-2)


test('climbing-stairs', () => {
  expect(climbStairs(1)).toEqual(1)
  expect(climbStairs(2)).toEqual(2)
  expect(climbStairs(3)).toEqual(3)
})
