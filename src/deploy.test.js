// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = []
  while (progresses.length > 0) {
    progresses = progresses.map((item, idx) => item + speeds[idx])
    let deploy = []
    while (progresses[0] >= 100) {
      deploy.push(progresses.shift())
      speeds.shift()
    }
    if (deploy.length > 0) {
      answer.push(deploy.length)
    }
  }
  return answer
}

test('deploy', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1])
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([
    1,
    3,
    2,
  ])
})
