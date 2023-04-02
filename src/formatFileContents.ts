import os from "os";
import { FormattedFileContents, Input } from "../model/input";
import { StandardBingoCard } from "../model/card";
import { FinishedGameState } from "../model/game";

const formatByLine = (rawContent: Input): string[] => {
const lines: string[] = rawContent.split(os.EOL);
const formattedLines: any = lines.map((line) => {
    return line
});
return formattedLines;
}

const parse = (target: string, condition: string): number[] => {
    let resultStrings = target.split(condition);
    resultStrings = resultStrings.filter((string) => string !== '')
    return resultStrings.map((item) => parseInt(item.trim()));
};

// If we were implementing variable card sizes then cardSize would need to be dynamic as well as replacing StandardBingoCard with BingoCard<dynamicSize>
// Alternatively, we could create a union type combining pre-allowed card sizes such as StandardBingoCard and MegaBingoCard (shown in card.d.ts)
const buildCards = (target: string[]): StandardBingoCard[] => {
    const emptiesFiltered = target.filter((item) => (item !== ' ' && item !== ''))
    const formattedToNumbers = emptiesFiltered.map((line) => parse(line, ' '))

    const cardBuilder = [];
    const cardSize = 5; 

    for (let i = 0; i < formattedToNumbers.length; i += cardSize) {
        const chunk = formattedToNumbers.slice(i, i + cardSize) as StandardBingoCard;
        cardBuilder.push(chunk);
    }

    return cardBuilder;
}

export default function formatFileContents(rawContent: Input): FinishedGameState {
    const lines: string[] = formatByLine(rawContent);
    const winningNumbers = parse(lines.shift()!, ',');
    const cards = buildCards(lines)
    const result = {
        winningNumbers,
        cards
    };
    return result;
};

/*
This implementation assumes that the data will always be in the given format 
And makes the assumption that no incomplete/incorrectly formatted cards will be provided.:

Line with winnings

5x5 card

5x5 card

5x5 card

....
*/