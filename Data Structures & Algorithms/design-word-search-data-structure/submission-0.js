class Node {
    constructor(val=""){
        this.val = val;
        this.neigbors = new Array(26).fill(null) ;
        this.isEnd = false;

    }
}
class WordDictionary {
    constructor() {
        this.node = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curNode = this.node;
        for(const ch of word){
            if(!curNode.neigbors[ch.charCodeAt(0)-"a".charCodeAt(0)]){
                const temp = new Node(ch);
                curNode.neigbors[ch.charCodeAt(0)-"a".charCodeAt(0)] = temp;
            }
            curNode = curNode.neigbors[ch.charCodeAt(0)-"a".charCodeAt(0)];
        }
        curNode.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curNode = this.node;
        for(const ch of word){
            if(ch==="."){
                curNode = curNode.neigbors.find((el)=>el!==null);
                if(!curNode) return false;
            }else if(!curNode.neigbors[ch.charCodeAt(0)-"a".charCodeAt(0)]){
                return false;
            }else curNode = curNode.neigbors[ch.charCodeAt(0)-"a".charCodeAt(0)];
           
        }
        return curNode.isEnd;
    }
}
