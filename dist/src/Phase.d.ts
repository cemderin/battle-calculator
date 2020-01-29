import Model from "./Model";
import Throw from "./Throw";
declare class Phase {
    name: string;
    attacker: Model;
    defender: Model;
    throws: Array<Throw>;
    constructor(name?: string, attacker?: Model, defender?: Model);
    handle(dice?: number): number;
}
export default Phase;
