/*

문제) 정수의 배열 nums와 정수 k 가 주어졌을 때 배열의 연속된 정수의 합이 k가 되는 부분 배열의 갯수를 구하여라



Example 1.

    Input. nums = [1, 1, 1], k = 2

    Output. 2

Example 2.

    Input. nums = [1, 2, 3], k = 3

    Output. 2

*
* */

function solution(nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[i]
      if (sum === k) {
        count++
      }
    }
  }
  return count
}

// 아.. 이건 진짜 이해하기 어렵넹 ㅠ
function solution2(nums, k) {
  let count = 0
  let sum = 0
  let map = new Map()
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const lookingFor = map.get(sum - k)
    if (lookingFor) {
      count += lookingFor
    }
    const curSum = map.get(sum) || 0
    map.set(sum, curSum + 1)
  }

  return count
}

test('sum-of-nums', () => {
  expect(solution2([1, 1, 1], 2)).toEqual(2)
  expect(solution2([1, 1, 1, 1], 2)).toEqual(3)
  expect(solution2([1, 1, 1, 1, 1], 2)).toEqual(4)
  expect(solution2([1, 2, 3], 3)).toEqual(2)
})
