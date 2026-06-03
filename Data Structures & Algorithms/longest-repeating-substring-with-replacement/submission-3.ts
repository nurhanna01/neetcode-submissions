class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const data = s.split('')
        let maxFinal = 0
        const freq = new Map()
        let track = 0
        let i = 0
        let j = 0
        let maxFreq = 1
        while(j<data.length){
            const value = freq.get(data[j])
            if(value == undefined) {
                freq.set(data[j],1)
                track++
            }
            else {
                freq.set(data[j], value+1)
                track++
                maxFreq = Math.max(freq.get(data[j]), maxFreq)
            }

            if(track > maxFreq + k){
                const getLast = freq.get(data[i])
                freq.set(data[i], getLast-1)
                track--
                i++
                j++
            }
            else j++
            if(track > maxFinal) maxFinal = track
        }
        return maxFinal
    }
}
