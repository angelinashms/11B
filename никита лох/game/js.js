const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';

check=0;


snake = [
      {x: 150, y: 150},
      {x: 140, y: 150},
      {x: 130, y: 150},
      {x: 120, y: 150},
      {x: 110, y: 150}
    ];
	
	

document.addEventListener('keydown', changeDirection);
createFood();
drawfood();

function changeDirection(event) {
	if (check){
		clearInterval(timer);
	}
	timer = setInterval(loop, 100, event);
}


function randomTen(min, max) {
      return Math.round((Math.random() * (max-min) + min) / 10) * 10;	  
    }

function createfood(){
	foodX=randomTen(0,game.clientWith-10);
	foodY=randomTen(0,game.clientHeight-10);
}
function drawfood(){
	const game = document.getElementById('game');
point=document.createElement('Point');
Point.className='snakefood';
point.style.left=FoodX+'px';
point.style.top=FoodY+'px';
game.AppendChield(point);
	
	}


function drawSnakePart
point=document.createElement('Point');
Point.className='snakefood';
point.style.left=FoodX+'px';
point.style.top=FoodY+'px';
game.AppendChield(point);
function drawSnake{
	snake.forEach(drawSnakePart)
	
}

