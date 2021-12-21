// https://leetcode.com/problems/sqrtx/submissions/

var mySqrt = function(x) {
  let start = 0, end = x

  while(true){
    let pivot = Math.floor((start+end)/2)
    const power = pivot * pivot
    const nextPower = (pivot+1)*(pivot+1)
    if(power <= x && nextPower > x){
      return pivot
    }
    if(nextPower === x){
      return pivot+1
    }
    if( nextPower < x ){
      start = pivot+1
    }
    if(power > x){
      end = pivot-1
    }
  }
};

var mySqrtX = function(x, n) {
  let start = 0, end = x
  let count = 0

  while(true){
    if(count++ > 50){
      break
    }
    const pow = Math.pow(10, n)
    let pivot = Math.floor(((start+end)*pow/2) )/ pow
    //console.log(start, pivot, end)
    const power = pivot * pivot
    const diff = 1/pow
    const nextPower = (pivot+diff)*(pivot+diff)
    if(power <= x && nextPower > x){
      return pivot
    }
    if(nextPower === x){
      return pivot+diff
    }
    if( nextPower < x ){
      start = pivot+diff
    }
    if(power > x){
      end = pivot-diff
    }
  }
};

test('sqrtx', () => {
  // expect(mySqrt(0)).toEqual(0)
  // expect(mySqrt(1)).toEqual(1)
  // expect(mySqrt(2)).toEqual(1)
  // expect(mySqrt(3)).toEqual(1)
  // expect(mySqrt(4)).toEqual(2)
  // expect(mySqrt(5)).toEqual(2)
  // expect(mySqrt(6)).toEqual(2)
  // expect(mySqrt(7)).toEqual(2)
  // expect(mySqrt(8)).toEqual(2)
  // expect(mySqrt(9)).toEqual(3)
  // expect(mySqrt(10)).toEqual(3)
  // expect(mySqrt(11)).toEqual(3)
  // expect(mySqrt(12)).toEqual(3)
  // expect(mySqrt(13)).toEqual(3)
  // expect(mySqrt(1024)).toEqual(32)
  expect(mySqrtX(2,3)).toEqual(1.414)
})
