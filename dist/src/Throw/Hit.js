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
var Logger_1 = __importDefault(require("../Logger"));
var ThrowHit = /** @class */ (function (_super) {
    __extends(ThrowHit, _super);
    function ThrowHit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThrowHit.prototype.roll = function (dice) {
        Logger_1["default"].log("Throw hit with " + dice);
        // check for attacker
        if (!this.attacker)
            throw new Error('No attacking model');
        return dice // input, amount of dice
            * // multiply by
                ((1 / 6) // total faces
                    * // multiply by
                        (7 - this.attacker.weaponskill) // valid faces
                );
    };
    return ThrowHit;
}(Throw_1["default"]));
exports["default"] = ThrowHit;
