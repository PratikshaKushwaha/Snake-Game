const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const restartButton = document.querySelector(".btn-restart");
const modal = document.querySelector(".modal");
const startGame = document.querySelector(".start");
const gameOver = document.querySelector(".over");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timeDisplay = document.querySelector("#time");

const blockHeight = 40;
const blockWidth = 40;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let score=0;
let highScore=localStorage.getItem("highScore")||0;
let time =`00-00`;

let intervalId = null;
let timerIntervalId = null;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

const blocks = [];

let snake = [
  {
    x: 1,
    y: 3,
  },
];

let direction = "down";
// for(let i=0;i<rows*cols;i++){
//     const block =document.createElement('div');
//     block.classList.add('block');
//     board.appendChild(block);
// }

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  let head = null;
  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    modal.style.display = "flex";
    startGame.style.display = "none";
    gameOver.style.display = "flex";
    return;
  }

  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");

    snake.unshift(head);
    score +=10;
    scoreDisplay.textContent=`${score}`;
    if(score>highScore){
      highScore=score;
      localStorage.setItem("highScore",highScore);
    }
  }

  snake.forEach((seg) => {
    blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();
  snake.forEach((seg) => {
    blocks[`${seg.x}-${seg.y}`].classList.add("fill");
  });
}

highScoreDisplay.textContent=`${highScore}`;

startButton.addEventListener("click", (e) => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 300);
  timerIntervalId=setInterval(()=>{
    let [min,sec]=time.split("-").map(Number);
    if(sec==59){
      min+=1;
      sec=0;
    }else{
      sec+=1
    }
    time=`${min}-${sec}`;
    timeDisplay.textContent=`${time}`;
  },1000)
});

function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((seg) => {
    blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
  });

  score=0;
  time=`00-00`;
  
  highScoreDisplay.textContent=`${highScore}`;
  scoreDisplay.textContent=`${score}`;
  timeDisplay.textContent=`${time}`;
  modal.style.display = "none";
  snake = [{ x: 1, y: 3 }];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalId = setInterval(() => {
    render();
  }, 300);
}

restartButton.addEventListener("click", restartGame);

addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    direction = "up";
  } else if (e.key == "ArrowDown") {
    direction = "down";
  } else if (e.key == "ArrowLeft") {
    direction = "left";
  } else if (e.key == "ArrowRight") {
    direction = "right";
  }
});
