import Throw from "../Throw";
import Logger from "../Logger";

class ThrowHit extends Throw {
    roll(dice: number): number {
        this.in = dice;
        Logger.log(`Throw hit with ${dice}`);

        // check for attacker
        if(!this.attacker) throw new Error('No attacking model');

        return this.out = dice    // input, amount of dice
                *       // multiply by
                (
                    (1/6)   // total faces
                    *       // multiply by
                    (7 - this.attacker.weaponskill) // valid faces
                );
    }
}

export default ThrowHit;