/*
* 문제)
정렬되지 않은 정수 배열과 정수 k가 주어 졌을 때, 배열 내의 원소 중 두 원소의 차가 k가 되는 모든 원소들의 쌍을 출력 하시오.
(추가 공간을 사용하지 않고 풀어 보세요.)
Input: [1, 5, 2, 2, 2, 5, 5, 4], k = 3
Output:
(4, 1)
(5, 2)
*
* https://madupteam.slack.com/archives/CGYBD85RR/p1613451862024400
* */

function solution(arr, k) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b)

  const result = []
  while (sorted.length >= 2) {
    const idx = sorted.findIndex(item => item === sorted[0] + k)
    if (idx >= 0) {
      result.push([sorted[idx], sorted[0]])
      sorted.splice(idx, 1)
    }
    sorted.shift()
  }
  return result
}

test('jeffrey 02/16', () => {
  expect(solution([1, 5, 2, 2, 2, 5, 5, 4], (k = 3))).toEqual([
    [4, 1],
    [5, 2],
  ])
})
