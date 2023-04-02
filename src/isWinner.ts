import { StandardBingoCard } from "../model/card";

function isWinningNumber(num: number, winningNumbers: number[]): boolean {
    const winner = winningNumbers.includes(num);
    return winner
}

export default function isWinner(card: StandardBingoCard, winningNumbers: number[]): boolean {
    const allRowsWinners = card.every((row) => row.every((item) => isWinningNumber(item, winningNumbers)))
    return allRowsWinners;
};
