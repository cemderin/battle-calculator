"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __importDefault(require("uuid"));
var Phase = /** @class */ (function () {
    function Phase() {
        this.name = 'Unnamed Phase';
        this.id = uuid_1.default();
    }
    return Phase;
}());
exports.default = Phase;
