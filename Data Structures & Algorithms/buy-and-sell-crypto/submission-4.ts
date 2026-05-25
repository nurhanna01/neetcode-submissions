class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuy = prices[0]
        let maxProfit = 0
        
        for(let i=1; i<prices.length;i++){
            if(prices[i]<minBuy){
                minBuy = prices[i]
            }
            if((prices[i]-minBuy)>maxProfit){
                maxProfit = prices[i]-minBuy
            }
        }

        return maxProfit
    }
}
