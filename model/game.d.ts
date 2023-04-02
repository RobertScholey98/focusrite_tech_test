import { StandardBingoCard } from "./card";

export type WinningNumbers = number[];

export interface FinishedGameState {
    winningNumbers: WinningNumbers;
    cards: StandardBingoCard[];
};