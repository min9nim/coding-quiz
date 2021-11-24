/*
문제)
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
  Find the kth positive integer that is missing from this array.


  Example 1:
Input: arr = [1,2,3,4], k = 1
Output: 5

Example 2:
Input: arr = [2,3,6,8,10], k = 5
Output: 9
*/


function findNthNum(arr, k){
  let sum = arr[0] - 1
  for(let i=0; i <= arr.length-2; i++){
    let cnt = arr[i+1] - arr[i] - 1
    if(cnt === 0){
      continue
    }
    if(sum + cnt >= k){
      return arr[i] + (k-sum)
    }
    sum += cnt
  }
  return arr[arr.length-1] + (k - sum)
}


test('findNthNum', () => {
  expect(findNthNum([1,2,3,4], 1)).toEqual(5)
  expect(findNthNum([2,3,6,8,10], 5)).toEqual(9)
})
