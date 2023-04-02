import { describe, expect, it } from '@jest/globals';
import isWinner, { isWinningNumber, isWinnerHorizontal, isWinnerVertical } from '../src/isWinner.ts';

describe('isWinner', () => {
  let winningNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const card = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  it('should return true if all numbers in the card are winning numbers', () => {
    expect(isWinner(card, winningNumbers)).toBe(true);
  });

  it('should return false if any number in the card is not a winning number', () => {
    const losingCard = [
      [30, 30, 30, 30, 30],
      [30, 7, 8, 9, 10],
      [30, 12, 13, 14, 15],
      [30, 17, 18, 19, 20],
      [30, 22, 23, 24, 26],
    ];
    expect(isWinner(losingCard, winningNumbers)).toBe(false);
  });
});

describe('isWinningNumber', () => {
  let num = 10;
  let winningNumbers = [10, 20, 30];

  it('should return true if num is in the winningNumbers array', () => {
    expect(isWinningNumber(num, winningNumbers)).toBe(true);
  })

  it('should return false if num is in the winningNumbers array', () => {
    expect(isWinningNumber(5, winningNumbers)).toBe(false);
  })
});

describe('isWinnerHorizontal', () => {
  let winningNumbers = [1, 2, 3, 4, 5];
  let failingNumbers = [30, 31, 32, 33, 34];
  const card = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  
  it('should return true if there is a horizontal winner', () => {
    expect(isWinnerHorizontal(card, 0, winningNumbers)).toBe(true);
  })
  it('should return false if there is not a horizontal winner', () => {
    expect(isWinnerHorizontal(card, 0, failingNumbers)).toBe(false);
  })
})

describe('isWinnerVertical', () => {
  let winningNumbers = [1, 2, 3, 4, 5];
  let failingNumbers = [30, 31, 32, 33, 34];
  const card = [
    [1, 30, 3, 4, 5],
    [2, 7, 8, 9, 10],
    [3, 12, 13, 14, 15],
    [4, 17, 18, 19, 20],
    [5, 22, 23, 24, 25],
  ];
  
  it('should return true if there is a horizontal winner', () => {
    expect(isWinnerVertical(card, 0, winningNumbers)).toBe(true);
  })
  it('should return false if there is not a horizontal winner', () => {
    expect(isWinnerVertical(card, 0, failingNumbers)).toBe(false);
  })
})
