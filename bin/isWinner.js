"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isWinningNumber(num, winningNumbers) {
    const winner = winningNumbers.includes(num);
    return winner;
}
function isWinner(card, winningNumbers) {
    const allRowsWinners = card.every((row) => row.every((item) => isWinningNumber(item, winningNumbers)));
    return allRowsWinners;
}
exports.default = isWinner;
;
