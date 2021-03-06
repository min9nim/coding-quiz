// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
  const state = computers.map((v, i) => ({
    index: i,
    linked: v,
    network: false,
  }))
  function enter(index, network) {
    // console.log('enter', index, 'network', network)
    const node = state[index]
    node.network = network
    node.linked.forEach((linked, i) => {
      if (linked && state[i].network === false) {
        enter(i, network)
      }
    })
  }
  state.forEach((node, i) => {
    if (node.network !== false) {
      return
    }
    enter(i, i)
  })

  return new Set(state.map(node => node.network)).size
}

function solution2(n, computers) {
  let seq = 1
  const nodedList = computers.map((link, idx) => ({idx, link}))

  function mark(node, seq){
    if(node.network){
      return
    }
    node.network = seq
    node.link.forEach((val, idx) => {
      if(!val){
        return
      }
      mark(nodedList[idx], seq)
    })
  }

  nodedList.forEach(node => {
    if(node.network){
      return
    }
    mark(node, seq)
    seq++
  })
  return seq-1;
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
