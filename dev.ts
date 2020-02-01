import Phase from './src/Phase';
import Model from './src/Model';
import Weapon from './src/Weapon';

const attacker = new Model();
attacker.weaponskill = 3;
attacker.strength = 5;

const weapon = new Weapon();
weapon.strength = 5;
attacker.weapon = weapon;

const defender = new Model();
defender.toughness = 4;
defender.save = 3;

const phase = new Phase();
phase.attacker = attacker;
phase.defender = defender;

phase.handle(2);