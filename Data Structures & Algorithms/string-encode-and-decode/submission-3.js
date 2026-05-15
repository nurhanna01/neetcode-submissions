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
            let j = i
            let numberOfString = ''
            let lengthIdx = 0
            while(strArr[j] != '|'){
                numberOfString = numberOfString + strArr[j]
                lengthIdx =  lengthIdx+1
                j++
            } 
            const startIdx = i + lengthIdx + 1  
            const lastIdx = startIdx + Number(numberOfString)

            result.push(strArr.slice(startIdx, lastIdx).join(''))
            i = i + lengthIdx + Number(numberOfString)
        }
        return result
    }
}
