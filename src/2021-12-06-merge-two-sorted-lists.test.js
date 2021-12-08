// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (list1, list2) {
  const result = []
  let i = 0,
    j = 0

  while (result.length < list2.length + list1.length) {
    // console.log('result', result)
    if (list1[i] === undefined && list2[j] !== undefined) {
      result.push(...list2.slice(j))
      break
    }
    if (list1[i] !== undefined && list2[j] === undefined) {
      result.push(...list1.slice(i))
      break
    }
    // console.log('result', result, i,j)
    if (list1[i] > list2[j]) {
      result.push(list2[j])
      j++
    } else {
      result.push(list1[i])
      i++
    }
  }

  return result
}

test('merge-two-sorted-list', () => {
  expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4])
  expect(mergeTwoLists([], [])).toEqual([])
  expect(mergeTwoLists([], [0])).toEqual([0])
})
