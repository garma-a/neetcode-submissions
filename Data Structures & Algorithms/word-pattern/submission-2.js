class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {


        const ch = pattern.split("");
         const arrS = s.split(" ");
        if(arrS.length !== pattern.length){
            return false;
        }
       const wordMap = new Map();
            const charMap = new Map();
        for(let i = 0 ; i<s.length;i++){
            

            const curCh = pattern[i] , curWord = arrS[i];
            if(wordMap.has(curWord) && wordMap.get(curWord)!== curCh) return false;
            if(charMap.has(curCh) && charMap.get(curCh)!== curWord) return false;
            wordMap.set(curWord , curCh);
            charMap.set(curCh , curWord);
            
        }
        return true;
    }


}
