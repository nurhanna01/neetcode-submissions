class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const data = s.split('')
        const find = t.split('')
        if(find.length > data.length) return ""

        const findMap = {}
        for(let i=0; i<find.length; i++){
            if(!findMap[find[i]]){
                findMap[find[i]] = 1
            } else {
                findMap[find[i]] = findMap[find[i]] + 1
            }
        }

        let min = Infinity
        let start = 0
        let end =0
        let freq = {}
        let totalNeed = Object.keys(findMap).length
        let totalFound = 0
        let i = 0
        let j = 0
        while(j < data.length){
            // init data freq
            if(freq[data[j]]) freq[data[j]] = freq[data[j]] + 1 
            else freq[data[j]] = 1
            
            // if numbers of letter is same between find & freq
            if (freq[data[j]] == findMap[data[j]]) totalFound = totalFound + 1

            // get minimum
            while(totalNeed == totalFound){
                if(j-i + 1 < min){
                    start = i
                    end = j
                    min = j - i + 1
                }

                // delete first i, update (reduce freq) and move
                if(findMap[data[i]]) freq[data[i]] = freq[data[i]] - 1

                // continue move until data members on findMap 
                // just update freq if data exist on findMap, so while will break 
                if(findMap[data[i]] && findMap[data[i]] > freq[data[i]]) totalFound = totalFound - 1
                i++
            }           
            j++
        }

        return min == Infinity ? "" : data.slice(start, end + 1 ).join('')
    }
}
