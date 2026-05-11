class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const storage = new Map()
        
        for(let i=0; i<strs.length; i++){
            const key =strs[i].split('').sort().join('') 
            if(storage.get(key)==undefined){
                storage.set(key,[strs[i]])
            } 
            else {
                const data = storage.get(key)
                data.push(strs[i])
                storage.set(key, data)
            }

        }
        const result = [...storage.values()]
        return result
    }
}
