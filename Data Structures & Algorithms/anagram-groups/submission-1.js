class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const storage = new Map()

        for(let i=0; i<strs.length; i++){
            const key = new Array(26).fill(0)
            for(let j=0;j<strs[i].length;j++){
                const idx = strs[i][j].charCodeAt(0)-"a".charCodeAt(0)
                key[idx]++
            }
            if(storage.get(key.join(','))==undefined){
                storage.set(key.join(','),[strs[i]])
            } 
            else {
                const data = storage.get(key.join(','))
                data.push(strs[i])
                storage.set(key.join(','), data)
            }

        }
        const result = [...storage.values()]
        return result
    }
}
