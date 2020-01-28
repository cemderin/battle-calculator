"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./src/Profile/Model"));
var Value_1 = __importDefault(require("./src/Profile/Value"));
var Phase_1 = __importDefault(require("./src/Phase"));
var profile = new Model_1.default(new Value_1.default(6), // mv
new Value_1.default(3), // ws
new Value_1.default(3), // bs
new Value_1.default(3), // s
new Value_1.default(3), // t
new Value_1.default(4), // w
new Value_1.default(3), // a
new Value_1.default(9), // ld
new Value_1.default(4));
var phase = new Phase_1.default();
console.log(phase);
