import formatFileContents from "./formatFileContents";
import readFile from "./readFile";
import isWinner, { findFirstWinner, FirstWinner } from "./isWinner";
import { StandardBingoCard } from "../model/card";
import { FinishedGameState } from "../model/game";
import printUtils from "./printUtils";

function getGameStateFromFile(relativePath: string): FinishedGameState {
    const fileContents = readFile(relativePath)
    const formattedData: FinishedGameState = formatFileContents(fileContents);
    return formattedData
}

function deduceWinnersFromFile(relativePath: string) {
    const formattedData = getGameStateFromFile(relativePath)

    formattedData.cards.map((card, index: number) => 
        printUtils.printWinners(index, isWinner(card, formattedData.winningNumbers))
    )
}

function findFirstWinnerFromFile(relativePath: string) {
    const formattedData = getGameStateFromFile(relativePath)
    const firstWinner = findFirstWinner(formattedData.cards, formattedData.winningNumbers);
    
    printUtils.printFirstWinner(relativePath, firstWinner);
}

export default function runTechTest(){
    console.log('challenge 1\n')
    deduceWinnersFromFile('files/input.txt');
    console.log('\n\n-----\n\n')
    console.log('challenge 2\n')
    findFirstWinnerFromFile('files/input2.txt');
}

