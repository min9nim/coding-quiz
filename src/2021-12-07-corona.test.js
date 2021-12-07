/*
문제 설명
정부의 위드코로나 정책에 힘입어 매드업 사옥은 다시 활기를 띄기 시작했습니다. 뿐만 아니라, 확진자가 생긴다면, 빠르게 밀접 접촉자를 파악할 수 있는 시스템을 구축하고 있습니다.

매드업은 출입 명부가 있습니다. 출입명부는 다음과 같이 쓰여 있습니다.
[1, 2, 3, -1, -3, -2]
양수는 들어온 해당 사원이 들어왔다는 의미이며, 음수는 해당 사원이 나갔다는 의미 입니다.
따라서, 위 출입 명부가 의미하는 것은 다음과 같습니다.

1번 사원이 사무실로 들어옴
2번 사원이 사무실로 들어옴
3번 사원이 사무실로 들어옴
1번 사원이 사무실에서 나감
3번 사원이 사무실에서 나감
2번 사원이 사무실에서 나감
이 중 만약 2번 사원이 확진자 라면, 1번 3번 사원은 밀접 접촉자가 됩니다.

[2, 1, 3, 4, -3, -4, -1, -2, 5, -5, 1, 6, -1, -6] 의 출입 명부에서, 1번 사원이 확진자 라면 밀접 접촉자는 2, 3, 4, 6 사원이 됩니다. 5번 사원은 1번 사원이 사무실에 부재중일때만 사무실에 있었으므로 제외됩니다.

이처럼 출입명부와 확진자 1명을 변수로 제공 합니다.

사원 번호는 자연수 입니다.
감염자는 1명이며, 내부에서 재감염 될 가능성은 0% 입니다.
감염자 명단은 라이언이 잘 읽을수 있도록 오름차순으로 정렬해야 합니다.
매개변수로는 int[]로 되어 있는 출입 명부와 int로 되어 있는 감염자 사원번호가 제공 됩니다.

* */

function solution(entry_log, infect) {
  var inOffice = new Set()
  var flag = false
  var result = new Set()
  for (let num of entry_log) {
    if (num === infect) {
      flag = true
      for (let num of inOffice) {
        result.add(num)
      }
      continue
    }
    if (num === -infect) {
      flag = false
      continue
    }
    if (num > 0) {
      inOffice.add(num)
    } else {
      inOffice.delete(-num)
    }

    if (flag) {
      if (num > 0) {
        result.add(num)
      }
    }
  }

  return Array.from(result).sort((a,b) => a-b)
}

test('corona', () => {
  // expect(
  //   solution([2, 1, 3, 4, -3, -4, -1, -2, 5, -5, 1, 6, -1, -6], 1),
  // ).toEqual([2, 3, 4, 6])
  // expect(solution([2, 6, 3, 4, -6, 5, -3, -4, -5, -2], 2)).toEqual([3, 4, 5, 6])
  // expect(solution([1,2,3,-2,-1,-3], 2)).toEqual([1,3])
  // expect(solution([], 2)).toEqual([])
  // expect(solution([1,2,3,-2,-1,-3], 2)).toEqual([1,3])
  expect(
    solution(
      [
        12,
        2,
        -12,
        1,
        3,
        9,
        4,
        -3,
        -4,
        -1,
        -2,
        -9,
        5,
        11,
        -5,
        1,
        6,
        -1,
        -11,
        -6,
      ],
      1,
    ),
  ).toEqual([2, 3, 4, 6, 9, 11])
})
