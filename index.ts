import ThrowHit from "./src/Throw/Hit";
import ThrowWound from "./src/Throw/Wound";
import ThrowSave from './src/Throw/Save';
import Model from "./src/Model";

const a = new ThrowWound();

a.attacker = new Model();
a.attacker.weaponskill = 3;
a.attacker.strength = 5;

a.defender = new Model();
a.defender.toughness = 4;
a.defender.save = 3;


// console.log('Result', a.roll(1.33333333));

const throws = [new ThrowHit, new ThrowWound, new ThrowSave];

let dice = 2;
for(let i = 0; i < throws.length; i++) {
    throws[i].attacker = a.attacker;
    throws[i].defender = a.defender;
    dice = throws[i].roll(dice);
}

console.log('Result', dice);

// console.log(a);