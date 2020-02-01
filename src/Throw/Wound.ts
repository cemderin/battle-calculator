import Throw from "../Throw";
import Logger from "../Logger";

class ThrowWound extends Throw {
    roll(dice: number): number {
        Logger.log(`Throw wound with ${dice}`);
        if(!this.attacker) throw new Error('No attacking model');
        if(!this.defender) throw new Error('No defending model');

        let minFace = 0;
        let attackingStrength = this.attacker.weapon.strength;

        if(attackingStrength >= this.defender.toughness*2) {
            minFace = 2;
        } else if(attackingStrength > this.defender.toughness) {
            minFace = 3;
        } else if(attackingStrength == this.defender.toughness) {
            minFace = 4;
        }  else if(attackingStrength < this.defender.toughness) {
            minFace = 5;
        } 

        return  dice    // input, amount of dice
                *       // multiply by
                (
                    (1/6)   // total faces
                    *       // multiply by
                    (7 - minFace) // valid faces
                );
    }    
}

export default ThrowWound;