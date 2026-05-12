class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countElement = {}
        const storage = new Array(nums.length+1).fill([])
        const result = []

        for(let i=0; i<nums.length; i++){
            if(!countElement[nums[i]]){
                countElement[nums[i]]=1
            } else {
                countElement[nums[i]]++
            }
        }

        for(const [key,value] of Object.entries(countElement)){
            if(storage[value].length==0){
                storage[value] = [key]
            } else {
                const getData= storage[value]
                getData.push(key)
                storage[value] = getData
            }
            
        }

        for(let i=storage.length-1; i>=0; i--){
            if(result.length<k && storage[i].length>0){
                for(let j=0;j<storage[i].length;j++){
                    result.push(storage[i][j])
                }
            }
        }
        return result
    }
}
