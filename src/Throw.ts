import Model from "./Model";

class Throw {
    attacker: Model | null = null;
    defender: Model | null = null;

    roll(dice: number): number {
        return dice;
    }    
} 

export default Throw;