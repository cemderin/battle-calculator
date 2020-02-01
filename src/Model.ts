import Weapon from './Weapon';

class Model {
    weaponskill: number = 6;
    toughness: number = 1;
    strength: number = 1;
    save: number = 6;
    weapon: Weapon = new Weapon()
}

export default Model;