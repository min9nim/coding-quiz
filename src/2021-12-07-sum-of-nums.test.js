/*
문제 설명
배열 numbers가 있습니다. numbers의 특정 구간의 숫자를 모두 합하는 작업을 반복하려고 합니다.
작업은 배열 start와 finish에 명시되어 있습니다. 예를들어

number가 [100, 101, 102, 103, 104]
start가 [1, 2]
finish가 [2, 4]
라면

첫 번째 작업은 start[0]부터 finish[0] 구간의 숫자를 모두 더하는겁니다. start[0]은 1이고 finish[0]은 2 이므로 numbers의 1~2사이의 숫자를 모두 더하면 101 + 102 = 203이 됩니다.
두 번째 작업은 start[1]부터 finish[1] 구간의 숫자를 모두 더하는 작업이므로 numbers의 2~4 사이의 숫자를 모두 더하면 102 + 103 + 104 = 309가 됩니다.
이렇게 수행한 작업의 결과를 순서대로 넣은 배열을 return 하도록 함수 solution을 완성하세요.
위의 예제 대로라면 [203, 309]를 반환하면 됩니다.

제한사항
numbers의 길이 N : N은 100,000 이하의 자연수입니다.
numbers의 원소의 값: 10,000 이하의 자연수입니다.
작업의 개수(start와 finish 배열의 길이) 는 100,000 이하입니다.
start와 finish 배열의 길이는 항상 같습니다.
k번째 작업 start[k]와 finish[k]에 대해서 0 ≤ start[k] ≤ finish[k] < N 입니다.
입출력 예
numbers	start	finish	결과
[100, 101, 102, 103, 104]	[1, 2]	[2, 4]	[203, 309]
입출력 예 설명
입출력 예 #1
문제의 예제와 같습니다.
* */

function solution(numbers, start, finish) {
  const map = new Map()

  function sum(start, end) {
    const key = String(start) + ',' + String(end)

    if (map.get(key)) {
      return map.get(key)
    }
    if (start === end) {
      map.set(key, numbers[start])
      return numbers[start]
    }
    const result = sum(start, end - 1) + numbers[end]
    map.set(key, result)
    return result
  }
  const answer = []
  for (let i = 0; i < start.length; i++) {
    answer.push(sum(start[i], finish[i]))
  }
  return answer
}

function solution2(numbers, start, finish){
  for(let i=1; i<numbers.length; i++){
    numbers[i] += numbers[i-1]
  }
  const answer = []
  for(let i=0; i<start.length; i++){
    if(start[i] === 0){
      answer.push(numbers[finish[i]])
    }else{
      answer.push(numbers[finish[i]] - numbers[start[i]-1])
    }
  }
  return answer
}

test('sum of nums', () => {
  expect(solution([100, 101, 102, 103, 104], [1, 2], [2, 4])).toEqual([
    203,
    309,
  ])
  expect(solution2([100, 101, 102, 103, 104], [1, 2], [2, 4])).toEqual([
    203,
    309,
  ])
})
