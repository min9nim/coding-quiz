// https://leetcode.com/problems/3sum


var threeSum = function(nums) {
  const set = new Set()

  for(let i=0; i<nums.length-2; i++){
    const map = new Map()
    for(let j=i+1; j<nums.length; j++){
      if(map.has(nums[j])){
        const [a,b] = map.get(nums[j])
        const arr = [nums[a], nums[b], nums[j]]
        arr.sort((a,b) => (a-b))
        set.add(arr.join(','))
      }else{
        map.set(-nums[i] - nums[j], [i,j])
      }
    }
  }
  return Array.from(set).map(str => str.split(',').map(Number))
};


test('3sum', () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,0,1], [-1,-1,2]])
})
