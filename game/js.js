const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';




snake = [
      {x: 150, y: 150},
      {x: 140, y: 150},
      {x: 130, y: 150},
      {x: 120, y: 150},
      {x: 110, y: 150}
    ];
	
	


const game = document.getElementById('game');

document.addEventListener('keydown', changeDirection);
check = 0;
function changeDirection(event) {
	if (check){
		clearInterval(timer);
	}
	timer = setInterval(loop, 100, event);
	
}


function loop(event)
{
	check = 1;
	if (event.code == 'ArrowUp') {
		dx = 0;
		dy = -10;
	}
	if (event.code == 'ArrowDown') {
		dx = 0;
		dy = 10;
	}
	if (event.code == 'ArrowLeft') {
		dx = -10;
		dy = 0;
	}
	if (event.code == 'ArrowRight') {
		dx = 10;
		dy = 0;
	}
	
	advanceSnake();
	
	
}



	

drawSnake();

createFood();
drawFood();
/**
     * Draws the snake on the canvas
     */
    function drawSnake() {
      // loop through the snake parts drawing each part on the canvas
      snake.forEach(drawSnakePart)
    }

    /**
     * Draws a part of the snake on the canvas
     * @param { object } snakePart - The coordinates where the part should be drawn
     */
    function drawSnakePart(snakePart) {
	point = document.createElement('div');
	point.className = 'snakeBlock';
	
	point.style.left = snakePart.x + 'px';
	point.style.top = snakePart.y + 'px';
	game.appendChild(point);
    }


function advanceSnake() {
      // Create the new Snake's head
      const head = {x: snake[0].x + dx, y: snake[0].y + dy};
	 if (head.x < 0 || head.x > game.clientWidth -10
	|| head.y < 0 || head.y > game.clientHeight-10 ){ clearInterval(timer); return;}
	console.log(snake[0].x);
	console.log(game.scrollWidth);
      // Add the new head to the beginning of snake body
	  $('.snakeBlock').remove();
      snake.unshift(head);
	  
	  snake.pop();
	  drawSnake();
}



// FOOD

/**
     * Draw the food on the canvas
     */
    function drawFood() {
    point = document.createElement('div');
	point.className = 'snakeFood';
	
	point.style.left = foodX + 'px';
	point.style.top = foodY + 'px';
	game.appendChild(point);
    }



function randomTen(min, max) {
      return Math.round((Math.random() * (max-min) + min) / 10) * 10;	  
    }

    /**
     * Creates random set of coordinates for the snake food.
     */
function createFood() {
  // Generate a random number the food x-coordinate
  foodX = randomTen(0, game.clientWidth - 10);
  // Generate a random number for the food y-coordinate
  foodY = randomTen(0, game.clientHeight - 10);

  // if the new food location is where the snake currently is, generate a new food location
  snake.forEach(function isFoodOnSnake(part) {
	const foodIsoNsnake = part.x == foodX && part.y == foodY;
	if (foodIsoNsnake) createFood();
  });
}



