class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const storeUnique = new Set()

        for(let i=0;i<nums.length;i++){
            storeUnique.add(nums[i])
        }
        
        const listSeq = new Map()
        
        for(const d of storeUnique){
            let value = d
            let countSeq = 1
            while(storeUnique.has(value-1)){
                countSeq++
                value--
            }
            listSeq.set(d, countSeq)
        }
        let max=0
        for(const [k,v] of listSeq){
            if(v>max){
                max = v
            }
        }
        return max

    }
}
