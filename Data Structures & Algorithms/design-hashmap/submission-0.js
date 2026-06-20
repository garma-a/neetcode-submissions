class MyHashMap {
    constructor(o={}) {
        this.o = o;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.o[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.o[key] !== undefined ? this.o[key] : -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.o[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
