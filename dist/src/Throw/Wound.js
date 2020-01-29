"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Throw_1 = __importDefault(require("../Throw"));
var ThrowWound = /** @class */ (function (_super) {
    __extends(ThrowWound, _super);
    function ThrowWound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThrowWound.prototype.roll = function (dice) {
        if (!this.attacker)
            throw new Error('No attacking model');
        if (!this.defender)
            throw new Error('No defending model');
        var minFace = 0;
        if (this.attacker.strength >= this.defender.toughness * 2) {
            minFace = 2;
        }
        else if (this.attacker.strength > this.defender.toughness) {
            minFace = 3;
        }
        else if (this.attacker.strength == this.defender.toughness) {
            minFace = 4;
        }
        else if (this.attacker.strength < this.defender.toughness) {
            minFace = 5;
        }
        return dice // input, amount of dice
            * // multiply by
                ((1 / 6) // total faces
                    * // multiply by
                        (7 - minFace) // valid faces
                );
    };
    return ThrowWound;
}(Throw_1["default"]));
exports["default"] = ThrowWound;
