import Throw from '../Throw';
import Logger from '../Logger';

class ThrowSave extends Throw {
    roll(dice: number): number {
        this.in = dice;
        Logger.log(`Throw save with ${dice}`);

        // check for defender
        if(!this.defender) throw new Error('No defending model');
        if(!this.attacker) throw new Error('No attacking model');

        let minSave = this.defender.save;
        minSave = minSave + this.attacker.weapon.armorPiercing;
        minSave = Math.min(minSave, 6);

        return this.out = dice    // input, amount of dice
                *       // multiply by
                (
                    (1/6)   // total faces
                    *       // multiply by
                    (-1 + minSave) // valid faces
                );
    }
}

export default ThrowSave;