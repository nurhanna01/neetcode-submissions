class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        const left = []
        const right = []
        let calculate = 1
        for(let i=0; i<nums.length; i++){
            left.push(calculate)
            calculate = calculate * nums[i]
        }
        calculate=1
        for(let i=nums.length-1; i>=0; i--){
            right[i]=calculate
            calculate = calculate * nums[i]
        }
        for(let i=0; i<nums.length; i++){
            result.push(left[i]*right[i])
        }
        return result
    }
}
