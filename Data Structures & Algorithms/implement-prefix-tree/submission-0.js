class Node{
    constructor(val=null,neighbors=[]){
      this.neighbors = neighbors;
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
        let curNode = this.node;
        let lastFoundIndex = 0;
         for(let idx = 0 ; idx<word.length ; idx++){
            const ch = word[idx];
            for(const neighbor of curNode.neighbors){
                if(neighbor.val===ch){
                    curNode = neighbor;
                    lastFoundIndex = idx+1;
                    break;
                }
            }
            if(lastFoundIndex === idx)break;  
        }
        while(lastFoundIndex < word.length){
             const temp = new Node(word[lastFoundIndex])
             curNode.neighbors.push(temp)
             curNode = temp;
            lastFoundIndex++;
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
            let found = false;
            for(const neighbor of curNode.neighbors){
                if(neighbor.val===ch){
                    curNode = neighbor;
                    found = true;
                    break;
                }
            }
            if(!found){
                return false;
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
            let found = false;
            for(const neighbor of curNode.neighbors){
                if(neighbor.val===ch){
                    curNode = neighbor;
                    found = true;
                    break;
                }
            }
            if(!found)return false;
        }
        return true;
    }
}
