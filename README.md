# React.js Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with React.js, where two players can play against each other. The game also records the score for each player and allows for resetting the match.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Score Tracking](#score-tracking)
- [Resetting the Match](#resetting-the-match)
- [Contributing](#contributing)



## Features

- Classic Tic-Tac-Toe gameplay.
- Player vs. Player mode.
- Score tracking for each player.
- Responsive design.
- Resetting the match.

## Getting Started

To run the game locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/amanxRaj/react-tic-tac-toe.git
   cd react-tic-tac-toe
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to play the game.

## How to Play

1. The game is played on a 3x3 grid.
2. Two players take turns to place their symbol (X or O) on the grid.
3. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
4. If the grid is full and no player has won, the game is a draw.

## Score Tracking

The game keeps track of each player's score. The score is updated after each game round, and it's displayed on the screen. The player with the most wins is highlighted as the current leader.

## Resetting the Match

You can reset the match at any time by clicking the "Reset" button. This action will clear the board and reset the score for both players, allowing you to start a new game.

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
