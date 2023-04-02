type FixedLengthArray<N extends number, T> = [T, ...T[]] & { length: N };
//  An array of fixed length N

type BingoCard<N extends number> = FixedLengthArray<N, FixedLengthArray<N, number>>;
//  A grid ([][]) where both the inner and outer arrays have fixed length N 

export type StandardBingoCard = BingoCard<5>;
//  Standard 5x5 bingo card

export type MegaBingoCard = BingoCard<7>;
//  If we wanted to extend the program to work with 7x7 bingo cards

export type UnionCard = StandardBingoCard | MegaBingoCard;
// Combining pre-allowed cards into a single type allows us to share card logic across the program while retaining type safety