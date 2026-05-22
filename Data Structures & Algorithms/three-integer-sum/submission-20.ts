class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = []
        nums.sort((a,b)=> a-b)

        for(let i=0; i<nums.length-2; i++){
            if(i > 0 && nums[i] == nums[i-1]) continue
            let j = i+1
            let k = nums.length-1
            const target = 0 - nums[i]
            while(k > j){
                if(nums[i] + nums[j] + nums[k] == 0 ){
                    result.push([nums[i], nums[j], nums[k]])
                    j++
                    k--
                    while(k > j && nums[k] == nums[k+1]) k--
                    while(k > j && nums[j] == nums[j-1]) j++
                } else {
                     if(nums[j] + nums[k] < target) j++
                     else if(nums[j] + nums[k] > target) k--
                     else if(nums[j] + nums[k] == target) {
                        j++
                        k--
                     }
                }
               
            }
        }
        return result
    }
}
