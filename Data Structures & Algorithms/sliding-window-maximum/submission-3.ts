class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const result = []
        const window = []
        const dataResult = []

        let i = 0
        while(i < nums.length){
            // delete all elemen window that small that current nums
            while(nums[window[window.length-1]] < nums[i]){
                window.pop()
            }
            window.push(i)
            
            // delete if first elemen not part of window
            if(window[0] <= i-k){
                window.shift()
            }

            // get max after get first window
            if(i >= k-1){
                result.push(window[0])
            }
            i++
        }

        for(let i=0; i<result.length; i++){
            dataResult.push(nums[result[i]])
        }

        return dataResult
    }
}
