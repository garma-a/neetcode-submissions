class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    let encodedStr=""
     for (let str of strs){
        const len = str.length+"$" ;
        encodedStr += len + str;
     }
    
     return encodedStr;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strArr = []; 
        // ["hello" , "world"]
     // 5$hello5$world
     let ptr = 0;
     while(ptr < str.length){
        let numStr = "";
        while(str.charCodeAt(ptr)>=48 && str.charCodeAt(ptr)<=57){
            numStr+=str[ptr];
            ptr+=1;
        }
        let num = parseInt(numStr);
        let word = str.slice(ptr+1 , ptr+1+num);
        strArr.push(word);
        ptr = ptr+1+num;

     }




        return strArr;

    }
}
