import Throw from '../Throw';

class ThrowSave extends Throw {
    roll(dice: number): number {
        // check for defender
        if(!this.defender) throw new Error('No defending model');

        return  dice    // input, amount of dice
                *       // multiply by
                (
                    (1/6)   // total faces
                    *       // multiply by
                    (-1 + this.defender.save) // valid faces
                );
    }
}

export default ThrowSave;