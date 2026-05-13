class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for(let i=0;i<strs.length;i++){
            result = result + strs[i].length + '|' + strs[i]
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        const strArr = str.split('')

        for(let i=0; i<strArr.length;i++){
            let lengthIdx = null
            let startIdx = null
            let numberOfString = null
            let lastIdx = null

            if(Number(strArr[i])>=0 && Number(strArr[i+1])>=0 && Number(strArr[i+2])>=0){
                lengthIdx = 3
                startIdx = i + 4
                numberOfString = Number(strArr[i]+strArr[i+1]+strArr[i+2])
                lastIdx = startIdx + numberOfString
            } else if (Number(strArr[i])>=0 && Number(strArr[i+1])>=0 && !Number(strArr[i+2])>=0){
                lengthIdx = 2
                startIdx = i+3
                numberOfString = Number(strArr[i]+strArr[i+1]) 
                lastIdx = startIdx + numberOfString
            } else {
                lengthIdx = 1
                startIdx = i+2
                numberOfString = Number(strArr[i]) 
                lastIdx = startIdx + numberOfString
            }    

            if(lengthIdx!=null && strArr[i+lengthIdx]=='|'){
                result.push(strArr.slice(startIdx, lastIdx).join(''))
                i = lastIdx - 1
            }
        }
        return result
    }
}
