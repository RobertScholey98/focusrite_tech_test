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
const formatFileContents_1 = __importDefault(require("./formatFileContents"));
const readFile_1 = __importDefault(require("./readFile"));
const isWinner_1 = __importStar(require("./isWinner"));
const printUtils_1 = __importDefault(require("./printUtils"));
function getGameStateFromFile(relativePath) {
    const fileContents = (0, readFile_1.default)(relativePath);
    const formattedData = (0, formatFileContents_1.default)(fileContents);
    return formattedData;
}
function deduceWinnersFromFile(relativePath) {
    const formattedData = getGameStateFromFile(relativePath);
    formattedData.cards.map((card, index) => printUtils_1.default.printWinners(index, (0, isWinner_1.default)(card, formattedData.winningNumbers)));
}
function findFirstWinnerFromFile(relativePath) {
    const formattedData = getGameStateFromFile(relativePath);
    const firstWinner = (0, isWinner_1.findFirstWinner)(formattedData.cards, formattedData.winningNumbers);
    printUtils_1.default.printFirstWinner(relativePath, firstWinner);
}
function runTechTest() {
    console.log('challenge 1\n');
    deduceWinnersFromFile('files/input.txt');
    console.log('\n\n-----\n\n');
    console.log('challenge 2\n');
    findFirstWinnerFromFile('files/input2.txt');
}
exports.default = runTechTest;
