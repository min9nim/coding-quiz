// https://programmers.co.kr/learn/courses/30/lessons/42883

// function solution(number, k) {
//   let arr = number.split('').map(Number)
//   const left = []
//   let cnt = 70
//   while (k > 0 && arr.length > k) {
//     // let max = Math.max(...arr.slice(0, k+1))
//     let max = arr
//       .slice(0, k + 1)
//       .map((num, idx) => ({ value: num, idx }))
//       .sort((a, b) => b.value - a.value)[0]
//     console.log('==', left, arr, max)
//     // const idx = arr.slice(0, k + 1).findIndex(item => item === max)
//     const idx = max.idx
//     if (idx > 0) {
//       arr.splice(0, idx)
//       k -= idx
//     } else {
//       left.push(arr.shift())
//     }
//
//     if (arr.length <= k) {
//       arr = []
//     }
//
//     if (cnt === 0) {
//       break
//     }
//     cnt--
//   }
//   return [...left, ...arr].join('')
// }

function solution(number, k){
  const stack = [];

  for(let i=0; i<number.length; i++){
    let now  = number[i];

    while(k > 0 && stack[stack.length -1] < now){
      stack.pop();
      k--;
    }
    stack.push(now);
  }

  stack.splice(stack.length - k, k);
  return stack.join('');
}

test('test', () => {
  expect(solution('1924', 2)).toEqual('94')
  expect(solution('98765456789', 3)).toEqual('98766789')
  // expect(solution('1231234', 3)).toEqual('3234')
  // expect(solution('4177252841', 4)).toEqual('775841')
  // expect(solution('99991', 4)).toEqual('9')
  // expect(solution('99999991', 4)).toEqual('9999')
  // expect(solution('9999999999999999999999999999991', 25)).toEqual('999999')
  // expect(solution('88888888898889888888', 17)).toEqual('998')
  // expect(solution('912391412', 3)).toEqual('991412')
})
