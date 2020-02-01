import Model from "./Model";
import Throw from "./Throw";
import ThrowHit from "./Throw/Hit";
import ThrowWound from "./Throw/Wound";
import ThrowSave from "./Throw/Save";
import Logger from './Logger';

class Phase {
    name: string;
    attacker: Model;
    defender: Model;
    throws: Array<Throw>;

    constructor(
        name: string = 'unnamed phase',
        attacker: Model = new Model(),
        defender: Model = new Model(),
    ) {
        this.name = name;
        this.attacker = attacker;
        this.defender = defender;
        this.throws = [
            new ThrowHit(),
            new ThrowWound(),
            new ThrowSave()
        ];
    }

    handle(dice: number = 1): number {
        Logger.log(`Start Phase ${this.name}`);
        let currentDice = dice;
        for(let i = 0; i < this.throws.length; i++) {
            this.throws[i].attacker = this.attacker;
            this.throws[i].defender = this.defender;

            currentDice = this.throws[i].roll(currentDice);
        }

        Logger.log(`Total wounds caused ${currentDice}`);
        return currentDice;
    } 
}

export default Phase;