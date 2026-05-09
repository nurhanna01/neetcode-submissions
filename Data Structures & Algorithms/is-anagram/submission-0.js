class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countData = {}
        
        if(s.length == t.length){
            for(let i=0; i<s.length; i++){
                if(!countData[s[i]]){
                    countData[s[i]] = 1
                } else {
                    countData[s[i]] = countData[s[i]] + 1
                }
            }

            for(let i=0; i<s.length; i++){
                if(!countData[t[i]]){
                    return false
                } else {
                    countData[t[i]] = countData[t[i]] - 1
                }
            }

            const allZero = Object.values(countData).every((e)=>e == 0)
            return allZero

        }
        return false 
    }
}
