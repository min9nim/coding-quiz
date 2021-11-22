/*
문제) 두개의 정렬된 자연수 배열을 중복이 제거된 하나의 정렬된 배열로 반환
Example 1.
Input. nums = [[1, 2], [1, 2]]
Output. [1, 2]
Example 2.
Input. nums = [[1, 2, 3, 3], [1,2,4]]
Output. [1, 2, 3, 4]
*/

function merge1(nums) {
  return Array.from(new Set([...nums[0], ...nums[1]])).sort((a, b) => a - b)
}

function merge2(nums) {
  const a = nums[0]
  const b = nums[1]

  let idx = -1
  for (let i = 0; i < b.length; i++) {
    for (let j = idx + 1; j < a.length; j++) {
      if (a[j] > b[i]) {
        a.splice(j, 0, b[i])
        idx = i
        break
      }
      if (j === a.length - 1) {
        a.push(...b.slice(i))
        return Array.from(new Set(a))
      }
    }
  }
  return Array.from(new Set(a))
}

function merge3(nums) {
  const a= nums[0]
  const b= nums[1]
  const arr = []

  let ai = 0
  let bi = 0
  while(arr.length < a.length + b.length){
    if(a[ai] < b[bi]){
      arr.push(a[ai])
      ai++
    }else{
      arr.push(b[bi])
      bi++
    }
    if(ai === a.length){
      arr.push(...b.slice(bi))
    }
    if(bi === b.length){
      arr.push(...a.slice(ai))
    }
  }
  return Array.from(new Set(arr))
}

test('test', () => {
  expect(
    merge1([
      [1, 2],
      [1, 2],
    ]),
  ).toEqual([1, 2])
  expect(
    merge1([
      [1, 2, 3, 3],
      [1, 2, 4],
    ]),
  ).toEqual([1, 2, 3, 4])
  expect(
    merge1([
      [1, 2, 3, 3, 6, 7, 8, 12, 14, 16],
      [1, 2, 4, 12, 16, 17, 23, 26, 78],
    ]),
  ).toEqual([1, 2, 3, 4, 6, 7, 8, 12, 14, 16, 17, 23, 26, 78])

  expect(
    merge2([
      [1, 2],
      [1, 2],
    ]),
  ).toEqual([1, 2])
  expect(
    merge2([
      [1, 2, 3, 3],
      [1, 2, 4],
    ]),
  ).toEqual([1, 2, 3, 4])
  expect(
    merge2([
      [1, 2, 3, 3, 6, 7, 8, 12, 14, 16],
      [1, 2, 4, 12, 16, 17, 23, 26, 78],
    ]),
  ).toEqual([1, 2, 3, 4, 6, 7, 8, 12, 14, 16, 17, 23, 26, 78])

  expect(
    merge3([
      [1, 2],
      [1, 2],
    ]),
  ).toEqual([1, 2])
  expect(
    merge3([
      [1, 2, 3, 3],
      [1, 2, 4],
    ]),
  ).toEqual([1, 2, 3, 4])
  expect(
    merge3([
      [1, 2, 3, 3, 6, 7, 8, 12, 14, 16],
      [1, 2, 4, 12, 16, 17, 23, 26, 78],
    ]),
  ).toEqual([1, 2, 3, 4, 6, 7, 8, 12, 14, 16, 17, 23, 26, 78])
})
