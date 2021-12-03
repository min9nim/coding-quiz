// https://yeu.kr/3Mw0Z#html

function solution(ball) {
  /*
  아래 함수들을 이용해서 검은점을 이동할 수 있습니다
     - ball.moveDown()        // 아래로 이동
     - ball.moveUp()          // 위로 이동
     - ball.moveLeft()        // 왼쪽으로 이동
     - ball.moveRight()       // 오른쪽으로 이동

  이동하기 전에 이동 가능한지 아래 함수들로 먼저 확인 할 수 있습니다
  만약 false 가 나온다면 해당 방향으로 이동하면 안됩니다
     - ball.isLeftMovable()   // 현재 위치로부터 왼쪽으로 이동 가능한지를 확인해서 가능하다면 true 리턴
     - ball.isRightMovable()  // 현재 위치로부터 오른쪽으로 이동 가능한지를 확인해서 가능하다면 true 리턴
     - ball.isUpMovable()     // 현재 위치로부터 위쪽으로 이동 가능한지를 확인해서 가능하다면 true 리턴
     - ball.isDownMovable()   // 현재 위치로부터 아래쪽으로 이동 가능한지를 확인해서 가능하다면 true 리턴
     - ball.isFinished()      // 목적지(녹색점)에 도착했는가를 확인할 수 있습니다. 도착했다면 true 를 리턴
  */
  const current = { x: 0, y: 0 }
  const visited = [{ x: 0, y: 0, count: 1 }]

  const downMovable = () =>
    ball.isDownMovable() &&
    visited.find(item => item.x === current.x && item.y === current.y - 1)
  const rightMovable = () =>
    ball.isRightMovable() &&
    visited.find(item => item.x === current.x + 1 && item.y === current.y)
  const upMovable = () =>
    ball.isUpMovable() &&
    visited.find(item => item.x === current.x && item.y === current.y + 1)
  const leftMovable = () =>
    ball.isLeftMovable() &&
    visited.find(item => item.x === current.x - 1 && item.y === current.y)

  const moveDown = () => {
    ball.moveDown()
    current.y -= 1
  }
  const moveRight = () => {
    ball.moveRight()
    current.x += 1
  }
  const moveUp = () => {
    ball.moveUp()
    current.y += 1
  }
  const moveLeft = () => {
    ball.moveLeft()
    current.x -= 1
  }

  const move = () => {
    const list = [
      {next: downMovable(), move: moveDown},
      {next: rightMovable(), move: moveRight},
      {next: upMovable(), move: moveUp},
      {next: leftMovable(), move: moveLeft}
    ]
    const unreached = list.find(item => item.next === undefined)
    if(unreached){
      unreached.move()
      visited.push({x: current.x, y: current.y, count: 1})
    }else{
      const sorted = list.filter(item => item.next).sort((a,b) => a.next.count - b.next.count)
      sorted[0].move()
      sorted[0].next.count += 1
    }
  }

  while (!ball.isFinished()) {
    move()
  }
}
