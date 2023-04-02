"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatFileContents_1 = __importDefault(require("./formatFileContents"));
const readFile_1 = __importDefault(require("./readFile"));
const isWinner_1 = __importDefault(require("./isWinner"));
function deduceWinnersFromFile(relativePath) {
    const fileContents = (0, readFile_1.default)(relativePath);
    const formattedData = (0, formatFileContents_1.default)(fileContents);
    formattedData.cards.map((card, index) => console.log(`Card ${index + 1} is a ${(0, isWinner_1.default)(card, formattedData.winningNumbers) ? 'winner congratulations!' : 'not a winner booo!'}`));
}
deduceWinnersFromFile('files/input.txt');
