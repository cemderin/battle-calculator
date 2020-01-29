"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Model_1 = __importDefault(require("./Model"));
var Hit_1 = __importDefault(require("./Throw/Hit"));
var Wound_1 = __importDefault(require("./Throw/Wound"));
var Save_1 = __importDefault(require("./Throw/Save"));
var Logger_1 = __importDefault(require("./Logger"));
var Phase = /** @class */ (function () {
    function Phase(name, attacker, defender) {
        if (name === void 0) { name = 'unnamed phase'; }
        if (attacker === void 0) { attacker = new Model_1["default"](); }
        if (defender === void 0) { defender = new Model_1["default"](); }
        this.name = name;
        this.attacker = attacker;
        this.defender = defender;
        this.throws = [
            new Hit_1["default"](),
            new Wound_1["default"](),
            new Save_1["default"]()
        ];
    }
    Phase.prototype.handle = function (dice) {
        if (dice === void 0) { dice = 1; }
        console.log("Start Phase " + this.name);
        Logger_1["default"].log("Start Phase " + this.name);
        var currentDice = dice;
        for (var i = 0; i < this.throws.length; i++) {
            this.throws[i].attacker = this.attacker;
            this.throws[i].defender = this.defender;
            currentDice = this.throws[i].roll(currentDice);
        }
        return currentDice;
    };
    return Phase;
}());
exports["default"] = Phase;
