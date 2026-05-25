class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let j = 1
        let minBuy = prices[0]
        let maxProfit = 0
        
        for(let i=0; i<prices.length;i++){
            if(prices[i]<minBuy){
                minBuy = prices[i]
            }
            if((prices[j]-minBuy)>maxProfit){
                maxProfit = prices[j]-minBuy
            }
            j++
        }

        return maxProfit
    }
}
