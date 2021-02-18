// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const printed = []
  const arr = priorities.map((item, idx) => ({key: idx, value: item}))
  while(arr.length > 0){
    const first = arr.shift()
    if(arr.some(item => item.value > first.value)){
      arr.push(first)
      continue
    }
    printed.push(first)
    if(first.key === location){
      return printed.length
    }
  }
}

test('printer', () => {
  expect(solution([2, 1, 3, 2], 2)).toEqual(1)
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toEqual(5)
})
