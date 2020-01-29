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
var ThrowSave = /** @class */ (function (_super) {
    __extends(ThrowSave, _super);
    function ThrowSave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThrowSave.prototype.roll = function (dice) {
        // check for defender
        if (!this.defender)
            throw new Error('No defending model');
        return dice // input, amount of dice
            * // multiply by
                ((1 / 6) // total faces
                    * // multiply by
                        (-1 + this.defender.save) // valid faces
                );
    };
    return ThrowSave;
}(Throw_1["default"]));
exports["default"] = ThrowSave;
