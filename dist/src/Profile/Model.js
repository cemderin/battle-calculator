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
Object.defineProperty(exports, "__esModule", { value: true });
var Profile_1 = __importDefault(require("../Profile"));
var Value_1 = __importDefault(require("./Value"));
var ProfileModel = /** @class */ (function (_super) {
    __extends(ProfileModel, _super);
    function ProfileModel(movement, weaponskill, battleskill, strength, toughness, wounds, attacks, leadership, save) {
        if (movement === void 0) { movement = new Value_1.default(0); }
        if (weaponskill === void 0) { weaponskill = new Value_1.default(0); }
        if (battleskill === void 0) { battleskill = new Value_1.default(0); }
        if (strength === void 0) { strength = new Value_1.default(0); }
        if (toughness === void 0) { toughness = new Value_1.default(0); }
        if (wounds === void 0) { wounds = new Value_1.default(0); }
        if (attacks === void 0) { attacks = new Value_1.default(0); }
        if (leadership === void 0) { leadership = new Value_1.default(0); }
        if (save === void 0) { save = new Value_1.default(0); }
        var _this = _super.call(this) || this;
        _this.movement = movement;
        _this.weaponskill = weaponskill;
        _this.battleskill = battleskill;
        _this.strength = strength;
        _this.toughness = toughness;
        _this.wounds = wounds;
        _this.attacks = attacks;
        _this.leadership = leadership;
        _this.save = save;
        return _this;
    }
    return ProfileModel;
}(Profile_1.default));
exports.default = ProfileModel;
