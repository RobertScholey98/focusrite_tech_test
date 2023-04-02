"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const formatByLine = (rawContent) => {
    const lines = rawContent.split(os_1.default.EOL);
    const formattedLines = lines.map((line) => {
        return line;
    });
    return formattedLines;
};
const parse = (target, condition) => {
    let resultStrings = target.split(condition);
    resultStrings = resultStrings.filter((string) => string !== '');
    return resultStrings.map((item) => parseInt(item.trim()));
};
// If we were implementing variable card sizes then cardSize would need to be dynamic as well as replacing StandardBingoCard with BingoCard<dynamicSize>
const buildCards = (target) => {
    const emptiesFiltered = target.filter((item) => (item !== ' ' && item !== ''));
    const formattedToNumbers = emptiesFiltered.map((line) => parse(line, ' '));
    const cardBuilder = [];
    const cardSize = 5;
    for (let i = 0; i < formattedToNumbers.length; i += cardSize) {
        const chunk = formattedToNumbers.slice(i, i + cardSize);
        cardBuilder.push(chunk);
    }
    return cardBuilder;
};
function formatFileContents(rawContent) {
    const lines = formatByLine(rawContent);
    const winningNumbers = parse(lines.shift(), ',');
    const cards = buildCards(lines);
    const result = {
        winningNumbers,
        cards
    };
    return result;
}
exports.default = formatFileContents;
;
/*
This implementation assumes that the data will always be in the given format:
Line with winnings
5x5 card
5x5 card
....
And makes the assumption that no incomplete/incorrectly formatted cards will be provided.
*/ 
