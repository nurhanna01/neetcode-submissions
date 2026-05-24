class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let result = 0
        const leftMax = new Array(height.length-1).fill(0)
        const rightMax = new Array(height.length-1).fill(0)
        let leftM = height[0]
        leftMax[0]= height[0]
        for(let i =0;i<height.length;i++){
            if(i==0) continue
            if(leftM > height[i]){
                leftMax[i]=leftM
            } else{
                leftMax[i]=height[i]
                leftM = height[i]
            }
            
        }
        let rightM=height[height.length-1]
        rightMax[height.length-1] = height[height.length-1]
        for(let i = height.length-2;i>=0;i--){
            if(rightM > height[i]){
                rightMax[i]=rightM
            } else{
                rightMax[i]=height[i]
                rightM= height[i]
            }
            
        }
        for(let j=0; j<height.length-1; j++){
            if(leftMax[j] < rightMax[j]){
                result = result + (leftMax[j]-height[j])
            } else {
                result = result + (rightMax[j]-height[j])
            }
        }
        return result
    }
}
