class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let index=s.length - 1
        let result = true
        const alphabet = /[a-z0-9]/i
        
        for(let i = 0; i<s.length; i++){
            if(i>index) return result
            while(!alphabet.test(s[i]))i++
            if(i==s.length) continue
            while(!alphabet.test(s[index]))index--
            if(s[i].toLowerCase() != s[index].toLowerCase()){
                return false
            }
            index--
        }
        return result
    }
}
