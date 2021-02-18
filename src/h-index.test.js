// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  function isHIndex(num, citations){
    const citedCnt = citations.filter(item => item >= num).length
    return citedCnt >= num && (citations.length - citedCnt) <= num
  }
  for (let answer = citations.length; answer >= 0; answer--){
    if(isHIndex(answer, citations)){
      return answer
    }
  }
}

test('test', () => {
  expect(solution([3, 0, 6, 1, 5])).toEqual(3)
})
