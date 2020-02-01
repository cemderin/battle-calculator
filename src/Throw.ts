import Model from "./Model";

class Throw {
    attacker: Model | null = null;
    defender: Model | null = null;
    in: number | null = null;
    out: number | null = null;

    roll(dice: number): number {
        return dice;
    }    
}

export {
    Throw as default
};