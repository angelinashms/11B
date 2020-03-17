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

function changeDirection(event) {
	if (check){
		clearInterval(timer);
	}
	timer = setInterval(loop, 100, event);
}


function randomTen(min, max) {
      return Math.round((Math.random() * (max-min) + min) / 10) * 10;	  
    }
	
function createFood(){
FoodX=randomTen(0,game.clientWidth-10);
FoodY=randomTen(0,game.clientHeight-10);

}	
	function drawFood(){
	
	}
	const point = document.createElement('point');
point.className = 'snakeFood';
point.style.





