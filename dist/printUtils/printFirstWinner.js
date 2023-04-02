"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (relativePath, firstWinner) => {
    console.log(`The first winner of the game at ${relativePath} is card number ${firstWinner.index}.\nYou will win in ${firstWinner.gameDuration} turns with the card:\n\n${firstWinner.card.map((row) => {
        return `${row.join(' ')}\n`;
    }).join('')}`);
};
