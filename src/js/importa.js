"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
const variavel_js_1 = require("./variavel.js");
console.log(variavel_js_1.x);
const multilplaImporta_js_1 = require("./multilplaImporta.js");
console.log(multilplaImporta_js_1.a);
console.log(multilplaImporta_js_1.b);
(0, multilplaImporta_js_1.myFunction)();
const alias_js_1 = require("./alias.js");
console.log(alias_js_1.someName);
const myNumbers = __importStar(require("./numbers.js"));
console.log(myNumbers);
const nx = myNumbers.n1;
console.log(nx);
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
const joao = new User('joao', 15);
console.log(joao);
