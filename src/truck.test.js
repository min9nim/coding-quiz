// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let time = 0
  const crossing = []
  const done = []
  const length = truck_weights.length

  while (done.length < length) {
    time++

    if (crossing.length > 0 && time - crossing[0].time === bridge_length) {
      done.push(crossing.shift())
    }

    const totalWeight = crossing.reduce(
      (acc, item) => acc + item.weight,
      truck_weights[0],
    )
    if (totalWeight <= weight && crossing.length <= bridge_length) {
      crossing.push({ time, weight: truck_weights.shift() })
    }
  }
  return time
}

test('test', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toEqual(8)
})
