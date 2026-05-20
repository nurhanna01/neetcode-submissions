class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0; i<numbers.length; i++){
            let j = numbers.length-1
            const find = target - numbers[i]
            while(j>0){
                if(numbers[j] == find){
                return [i+1,j+1]
                }
                j--
            }
        }
    }
}
