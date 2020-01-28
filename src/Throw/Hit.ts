import Throw from "../Throw";

class ThrowHit extends Throw {
    roll(dice: number): number {
        // check for attacker
        if(!this.attacker) throw new Error('No attacking model');

        return  dice    // input, amount of dice
                *       // multiply by
                (
                    (1/6)   // total faces
                    *       // multiply by
                    (7 - this.attacker.weaponskill) // valid faces
                );
    }
}

export default ThrowHit;