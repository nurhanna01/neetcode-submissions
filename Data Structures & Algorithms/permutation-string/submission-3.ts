class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false
        const original = new Map()
        const arr1 = s1.split('')
        const arr2 = s2.split('')
        for(let i = 0; i < arr1.length; i++){
            const getData =  original.get(arr1[i])
            if(getData == undefined){
                original.set(arr1[i],1)
            } else {
                original.set(arr1[i],getData + 1)
            }
        }
        let data = new Map(original)
        let i=0;
        let j=0;
        while(j<arr2.length){
            const checkData = data.has(arr2[j])
            const getData = data.get(arr2[j])
            
            if(checkData != false){
                if(getData >1) data.set(arr2[j], getData -1)
                else data.delete(arr2[j])
                if(data.size == 0)return true
                j++
            }else {
                if(!arr1.includes(arr2[j])){
                    j++
                    i=j
                    data = new Map(original)
                    continue
                }
                if(i!=j){
                    const check = data.get(arr2[i])
                    if(check != undefined) data.set(arr2[i], check+1)
                    else data.set(arr2[i],1)
                }
                i++
            }
        }
        
        return false
    }
}
