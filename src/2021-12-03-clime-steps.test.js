/*

문제) n개의 계단을 오르는 아이가 한번에 1계단을 오르기도 2계단을 오르기도 3계단을 오르기도 한다. 아이가 계단을 오르는 경우의 수는 몇가지 일까 ?



Example 1.

    Input. n = 2

    Output. 2

Example 2.

    Input. n=3

    Output. 4

*
* */


// f(n) = f(n-1) + 2 * f(n-2) + 4 * f(n-3)



function solution(n){
  const hash = {1: 1, 2: 2, 3: 4}
  if(hash[n]){
    return hash[n]
  }else{
    const result = solution(n-1) + 2 * solution(n-2) + 4 * solution(n-3)
    hash[n] = result
    return result
  }
}


test('clime-steps-of-nums', () => {
  expect(solution(2)).toEqual(2)
  expect(solution(3)).toEqual(4)
})
