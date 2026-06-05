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

        let letterMin = []
        let trackLetter = []
        let copy = {...findMap}
        let i = 0
        let j = 0
        while(j < data.length){
            if(i==j && !copy[data[j]]){
                i++
                j++
                continue
            }
            if(copy[data[j]]){   
                if(copy[data[j]]>1) copy[data[j]] = copy[data[j]]-1             
                else delete copy[data[j]]
            }
            trackLetter.push(data[j])
            j++
            if(Object.keys(copy).length == 0){
                if(trackLetter.length < letterMin.length || letterMin.length==0) {
                    letterMin = trackLetter
                }
                i= i+1
                j= i
                copy = {...findMap}
                trackLetter = []

            }
        }
        return letterMin.join('')
    }
}
