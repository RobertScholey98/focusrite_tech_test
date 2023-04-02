import { StandardBingoCard } from "../model/card";
import { WinningNumbers } from "../model/game";

export type FirstWinner = {index: number, card: StandardBingoCard, gameDuration: number}

export function isWinningNumber(num: number, winningNumbers: WinningNumbers): boolean {
  return winningNumbers.includes(num);
}

export function isWinnerVertical(card: StandardBingoCard, columnIndex: number, winningNumbers: WinningNumbers): boolean {
  for (let i = 0; i < 5; i++) {
    if (!isWinningNumber(card[i][columnIndex], winningNumbers)) {
      return false;
    }
  }
  return true;
}

export function isWinnerHorizontal(card: StandardBingoCard, rowIndex: number, winningNumbers: WinningNumbers): boolean {
  for (let i = 0; i < 5; i++) {
    if (!isWinningNumber(card[rowIndex][i], winningNumbers)) {
      return false;
    }
  }
  return true;
}

export default function isWinner(card: StandardBingoCard, winningNumbers: WinningNumbers): boolean {
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

export function findFirstWinner(cards: StandardBingoCard[], winningNumbers: WinningNumbers): FirstWinner {
    for(let i = 5; i<winningNumbers.length; i++) {
        const newWinningNumbers = winningNumbers.slice(0, i);
        for(let j = 0; j<cards.length; j++) {
            if(isWinner(cards[j], newWinningNumbers)) {
                return { index: j + 1, card: cards[j], gameDuration: newWinningNumbers.length + 1 }
            }
        }  
    }
    throw new Error("No winner found");
}