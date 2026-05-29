class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length<=0) return 0
        const check = new Map()
        check.set(s[0],0)
        let longest = 1
        let trackLong = 1
        let lastWindow = 0
        for(let i=1; i<s.length;i++){
            if(!check.has(s[i])){
                check.set(s[i],i)
                trackLong += 1
                if(trackLong > longest){
                    longest = trackLong
                }
            } else if(lastWindow>check.get(s[i])){
                check.set(s[i],i)
                trackLong += 1
            }
            else {
                if(trackLong > longest){
                    longest = trackLong
                }
                const getLastSimiliar = check.get(s[i])
                trackLong = i - getLastSimiliar
                // replace duplicate to new index
                check.set(s[i],i)
                lastWindow = getLastSimiliar+1
            }
        }
        return longest
    }
}
