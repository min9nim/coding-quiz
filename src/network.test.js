// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
  let seq = 1
  const nodedList = computers.map((linked, idx) => ({
    idx,
    linked,
    network: undefined,
  }))

  function mark(node, seq) {
    if (node.network) {
      return
    }
    node.network = seq
    node.linked.forEach((val, idx) => {
      if (!val) {
        return
      }
      mark(nodedList[idx], seq)
    })
  }

  nodedList.forEach(node => {
    if (node.network) {
      return
    }
    mark(node, seq)
    seq++
  })

  return seq-1
}

test('network', () => {
  expect(
    solution(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ]),
  ).toEqual(2)
  expect(
    solution(3, [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ]),
  ).toEqual(1)
})
