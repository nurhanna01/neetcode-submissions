class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0
        let j = heights.length-1
        let max = 0
        let small = 0
        while(i<j){
            if(heights[i] > heights[j]){
                small = heights[j]
            }else if(heights[i] < heights[j]){
                small = heights[i]
            }else{
                small = heights[i]
            }
            if( (j-i) * small > max){
                max = (j-i) * small
            }
            if(small == heights[i]) i++
            else j--
        }
        return max
    }
}
