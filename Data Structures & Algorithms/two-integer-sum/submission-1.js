class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const findTarget = new Map()
        for(let i=0;i<nums.length;i++){
            const check = target-nums[i]
            if(findTarget.get(check)!==undefined){
                return [i, findTarget.get(check)]
            }
            if(findTarget.get(nums[i])==undefined){
                findTarget.set(nums[i],i)
            }
        }
    }
}
