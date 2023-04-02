"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (index, isWinner) => {
    console.log(`Card ${index + 1} is a ${isWinner ? 'winner congratulations!' : 'not a winner booo!'}`);
};
