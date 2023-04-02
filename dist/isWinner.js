"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstWinner = exports.isWinnerHorizontal = exports.isWinnerVertical = exports.isWinningNumber = void 0;
function isWinningNumber(num, winningNumbers) {
    return winningNumbers.includes(num);
}
exports.isWinningNumber = isWinningNumber;
function isWinnerVertical(card, columnIndex, winningNumbers) {
    for (let i = 0; i < 5; i++) {
        if (!isWinningNumber(card[i][columnIndex], winningNumbers)) {
            return false;
        }
    }
    return true;
}
exports.isWinnerVertical = isWinnerVertical;
function isWinnerHorizontal(card, rowIndex, winningNumbers) {
    for (let i = 0; i < 5; i++) {
        if (!isWinningNumber(card[rowIndex][i], winningNumbers)) {
            return false;
        }
    }
    return true;
}
exports.isWinnerHorizontal = isWinnerHorizontal;
function isWinner(card, winningNumbers) {
    for (let i = 0; i < 5; i++) {
        if (card[i].every((num) => isWinningNumber(num, winningNumbers))) {
            return true; // Horizontal winner
        }
        if (isWinnerVertical(card, i, winningNumbers)) {
            return true; // Vertical winner
        }
    }
    return false;
}
exports.default = isWinner;
function findFirstWinner(cards, winningNumbers) {
    for (let i = 5; i < winningNumbers.length; i++) {
        const newWinningNumbers = winningNumbers.slice(0, i);
        for (let j = 0; j < cards.length; j++) {
            if (isWinner(cards[j], newWinningNumbers)) {
                return { index: j + 1, card: cards[j], gameDuration: newWinningNumbers.length + 1 };
            }
        }
    }
    throw new Error("No winner found");
}
exports.findFirstWinner = findFirstWinner;
