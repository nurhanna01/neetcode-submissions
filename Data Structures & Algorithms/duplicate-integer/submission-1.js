class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let a = {}
        for(let i=0;i<nums.length;i++){
            const key=nums[i].toString()
            if(!a[key]){
                a[key]=key
            } else {
                return true
            }
        }
        console.log("final a",a)
    return false
    }
}
