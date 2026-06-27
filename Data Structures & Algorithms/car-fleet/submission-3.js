class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        
        let fleets = 1;
        let posSpeed = position.map((el, i) => ({ pos: el, speed: speed[i] }));
        posSpeed.sort((a, b) => a.pos - b.pos);
        let MaxStepsRemain =(target - posSpeed[speed.length-1].pos) / posSpeed[speed.length-1].speed;
        for (let i = speed.length - 2; i >= 0; i--) {
            let curStepsRemain = (target - posSpeed[i].pos) / posSpeed[i].speed;
            if(curStepsRemain>MaxStepsRemain){
                fleets+=1;
                MaxStepsRemain = curStepsRemain;
            }
            
        }
        return fleets;
    }
}
