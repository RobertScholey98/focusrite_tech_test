To install the relevant dependancies please make sure to run 'yarn install'

use the 'yarn start' script to build and run the project

you can also run the 'yarn test' command to run the test suite for the project

notes: 

- not all of the tests I'd like to have written have been added due to time constraints
- The program assumes that the data ingested will be of the set shape:
first row: winning numbers seperated by commas
subsequent rows: 5x5 grids of numbers seperated by spaces
- I have written the BingoCard type to be extensible in the event that we wanted to allow users to play with cards of varying sizes. Outside of card.d.ts the program assumes that only cards of type StandardBingoCard (BingoCard<5>) are allowed.
