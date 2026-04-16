class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.mp = new Map();
  }

  get(key) {
    if (!this.mp.has(key)) return -1;

   
    const val = this.mp.get(key);
    this.mp.delete(key);
    this.mp.set(key, val);
    
    return val;
  }

  put(key, value) {
    if (this.mp.has(key)) {
    
      this.mp.delete(key);
    } else if (this.mp.size === this.capacity) {
      
      const firstKey = this.mp.keys().next().value;
      this.mp.delete(firstKey);
    }
    
    this.mp.set(key, value);
  }
}