/*

매드업 엔지니어 라이언이 웹사이트를 분석하고 있습니다.

라이언은 하나의 웹 페이지에 몇 가지 종류의 광고가 들어갈 수 있는지 분석해야 합니다. 라이언은 어떤 광고가 어떤 디자인으로 삽입 되는지는 신경쓰지 않아도 되고, 광고 영역의 크기와 모양의 종류만 파악하면 됩니다.

웹페이지 분석을 통한 데이터가 1차원 배열로 input으로 제공 됩니다. 그리고, 그 배열에서 광고영역의 종류의 수를 output으로 리턴 해주는 함수를 만들어야 합니다. 광고 가능 영역의 갯수가 아니라, 광고 영역의 종류를 리턴해야 합니다.


예시 1)
input :
["OOOOOO", "OOOOOO", "OOOOOO", "OOOOOO"]


output:
0


웹페이지 영역은 O(알파벳 대문자 O)으로 표시됩니다.
OOOOOO
OOOOOO
OOOOOO
OOOOOO

위 예시는 광고 가능 영역이 없는 페이지 입니다.

Output:
0

이 경우 광고 영역 자체가 없기 때문에 광고 영역 종류 역시  0개 입니다.

예시 2)
아래는 광고 가능 영역이 있는 페이지의 예시 입니다. O은 웹페이지 영역, X는 광고 가능 영역 입니다.
input:
["XXOOOO", "XXOOOO", "OOXXOO", "OOOOXX"]




output:
2


XXOOOO
XXOOOO
OOXXOO
OOOOXX

위 예시에는  세 군데의 광고 가능 영역이 있습니다.
1) 첫 영역
XX
XX


2) 두번째 영역
XX


3) 세번째 영역
XX


총 광고 가능 영역은 3군데 이지만,
두번째 영역과 세번째 영역은 같은 크기, 같은 모양 이므로, 한 종류로 취급하여, output은 2가 되어야 합니다.

주의 사항
** Input 데이터 갯수는 49개를 넘지 않습니다. Input 데이터 배열에 속해 있는 아이템의 길이도 49를 넘지 않습니다.

** 광고 가능 영역의 모양이 같아도 크기가 다르면 다른 종류 입니다. 아래 예시의 경우 Output은 3이 됩니다.
XXXO
XXXO
XXXO
OOOO
XXOO
XXOX


** 크기 모양이 같아도 회전되어 있으면 다른 종류입니다. 아래 예시의 경우 Output은 2가 됩니다.
XXXO
XOOX
OXXX


* */



function solution(strs){
  function visit(i, j, area){
    visited[i][j] = true
    if(strs[i][j] !== 'X'){
      return
    }
    // console.log(visited.map(item => item.map(value => value ? "*" : 'o').join('')).join('\n'))
    area.push([i,j])
    if(visited[i][j+1] === false){
      visit(i, j+1, area)
    }
    if(visited[i+1]?.[j] === false){
      visit(i+1, j, area)
    }
    if(visited[i][j-1] === false){
      visit(i, j-1, area)
    }
    if(visited[i-1]?.[j] === false){
      visit(i-1, j, area)
    }
  }

  const visited = strs.map(value => value.split("").map(() => false))
  const areaList = []

  for(let i=0; i < strs.length; i++){
    for(let j=0; j < strs[i].length; j++){
      if(!visited[i][j] && strs[i][j] === 'X'){
        const area = []
        visit(i,j,area)
        areaList.push(area)
      }
    }
  }
  // console.log(areaList)

  const signatureList = areaList.map(serializeArea)

  return new Set(signatureList).size
}


function serializeArea(area){
  const xArr = area.map(item => item[0])
  const yArr = area.map(item => item[1])
  const minX = Math.min(...xArr)
  const minY = Math.min(...yArr)
  return JSON.stringify(area.map(item => [item[0]-minX, item[1]-minY]))
}

test('ad-area', () => {
  expect(solution(["OOOOOO", "OOOOOO", "OOOOOO", "OOOOOO"])).toEqual(0)

  expect(solution(["XXOOOO", "XXOOOO", "OOXXOO", "OOOOXX"])).toEqual(2)

  expect(solution([
  'XXXO',
  'XXXO',
  'XXXO',
  'OOOO',
  'XXOO',
  'XXOX',
  ])).toEqual(3)

  expect(solution([
  'XXXO',
  'XOOX',
  'OXXX',
  ])).toEqual(2)

})
