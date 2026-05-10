class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]+nums[i+1]==target){
                return [i,i+1]
            } else {
                for(let j=i+1;j<nums.length;j++){
                    if(nums[i]+nums[j]==target){
                        return [i,j]
                    }
                }
            }
        }
    }
}
