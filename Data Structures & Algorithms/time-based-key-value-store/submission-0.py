

class TimeMap:

    def __init__(self):
        self.mp = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
            self.mp[(key,timestamp)] = value

        

    def get(self, key: str, timestamp: int) -> str:
        val =  self.mp.get((key,timestamp))
        self.mp[(key,timestamp+1)] = val
        return val or ""
        
