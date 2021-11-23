/*
Q 두 개의 문자열 A, B가 주어졌을 때 A 문자열에서 두 개의 문자 위치를 교환해서 B가 되는지 판단하는 함수 구현
e.g.,
input : A = “abc”, B = “acb”
output : true
*/

function swappable(a, b) {
  if (a.length !== b.length) {
    return false
  }
  if (a === b && new Set(a.split('')).size < a.length) {
    return true
  }

  let temp = []
  let cnt = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue
    } else {
      cnt++
      if (cnt > 2) {
        return false
      }
      if (temp.length > 0) {
        if (!(temp[0] === b[i] && temp[1] === a[i])) {
          return false
        }
      } else {
        temp = [a[i], b[i]]
      }
    }
  }
  return cnt === 2
}

test('swapable', () => {
  expect(swappable('aab', 'aab')).toEqual(true)
  expect(swappable('abccc', 'acbbb')).toEqual(false)
  expect(swappable('abccc', 'acbbb')).toEqual(false)
  expect(swappable('abccc', 'acbbb')).toEqual(false)
  expect(swappable('abcwq', 'acbwq')).toEqual(true)
  expect(swappable('abc', 'ayc')).toEqual(false)
  expect(swappable('ab', 'ab')).toEqual(false)
})
