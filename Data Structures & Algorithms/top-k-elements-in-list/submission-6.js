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
        console.log("countElement",countElement)
        console.log("storage ",storage)

        for(const [key,value] of Object.entries(countElement)){
            console.log("ini key array",storage[value])
            console.log("ini VALUE array",key)
            if(storage[value].length==0){
                storage[value] = [key]
            } else {
                const getData= storage[value]
                console.log(storage[value],typeof(getData))
                getData.push(key)
                storage[value] = getData
            }
            
        }
        console.log("storage 2",storage)

        for(let i=storage.length-1; i>=0; i--){
            console.log(result,result.length,"penuh ga?")
            console.log(storage[i],"storage[i]")
            if(result.length<k && storage[i].length>0){
                for(let j=0;j<storage[i].length;j++){
                    result.push(storage[i][j])
                }
            }
        }
        return result
    }
}
