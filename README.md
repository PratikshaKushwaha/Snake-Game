# 🐍 Snake Game

A classic Snake game built with vanilla JavaScript, HTML, and CSS. Guide your snake to eat food and grow longer while avoiding walls and collisions!

## Features

✨ **Core Gameplay**
- Classic snake mechanics with smooth movement
- Food spawning and collision detection
- Wall collision detection with game over state
- Score system (+10 points per food eaten)

📊 **Score Tracking**
- Current score display
- High score persistence using browser localStorage
- Real-time score updates

⏱️ **Game Information**
- Timer display to track game duration
- High score display

🎮 **User Interface**
- Start Game button to begin
- Restart Game button after game over
- Modal dialogs for game states
- Responsive design with grid-based board

🎨 **Modern Styling**
- CSS variables for easy theme customization
- Dark theme with accent colors
- Smooth animations and transitions
- Grid-based game board with individual blocks

## How to Play

1. **Start**: Click the "Start Game" button
2. **Control**: Use arrow keys (← → ↑ ↓) to move the snake
3. **Eat**: Guide the snake to the red food blocks to grow and score points
4. **Avoid**: Don't hit the walls or collide with yourself
5. **Game Over**: When you hit a wall or yourself, the game ends
6. **Restart**: Click "Restart Game" to play again

## Game Rules

- The snake moves continuously in the direction you set
- Each food eaten adds 10 points to your score
- The snake grows by 1 block with each food eaten
- Hitting the board boundary ends the game
- The high score is saved and persists between sessions

## Technical Stack

- **HTML5**: Semantic markup and game structure
- **CSS3**: Modern styling with CSS variables for theming
- **JavaScript (Vanilla)**: Core game logic and state management

## Project Structure

```
Snake-Game/
├── index.html      # Game HTML structure
├── script.js       # Game logic and mechanics
├── style.css       # Styling and layout
└── README.md       # This file
```

## Game Mechanics

### Snake Movement
- The snake moves automatically in the selected direction
- Direction changes with arrow key inputs
- Movement is grid-based (40px blocks)

### Food System
- Food appears at random positions on the board
- Collision with food increases snake length and score
- New food spawns after each food is eaten

### Scoring
- Base score: +10 points per food eaten
- High score is automatically saved to browser localStorage
- High score persists across browser sessions


## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any modern browser with ES6 support


**Enjoy the game! 🎮**
