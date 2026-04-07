class Node{
    constructor(val=null){
      this.neighbors = new Array(26).fill(null);
      this.val = val;
      this.isEnd = false;
    }
}
class PrefixTree {
    constructor() {
        this.node = new Node(); 
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curNode =this.node;
         for(let idx = 0 ; idx<word.length ; idx++){
                const ch = word[idx];
                if(!curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)]){
                    const temp = new Node(ch)
                    curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)]=temp;
                    curNode=temp;
                }else{
                    curNode = curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)];
                }
            
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
                if(!curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)]){
                  return false;
                }else{
                    curNode = curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)];
                }
            
        }
        return (curNode && curNode.isEnd);
    

    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curNode = this.node;
         for(const ch of prefix){
                if(!curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)]){
                  return false;
                }else{
                    curNode = curNode.neighbors[ch.charCodeAt(0)-'a'.charCodeAt(0)];
                }
            
        }
        return true;
    }
}
