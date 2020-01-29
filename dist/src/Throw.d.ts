import Model from "./Model";
declare class Throw {
    attacker: Model | null;
    defender: Model | null;
    roll(dice: number): number;
}
export { Throw as default };
