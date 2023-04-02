"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readFile_1 = __importDefault(require("./readFile"));
const fileContents = (0, readFile_1.default)('files/input.txt');
console.log(fileContents);
