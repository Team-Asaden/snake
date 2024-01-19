const canvas = document.getElementById('c1');
const ctx = canvas.getContext("2d")


const canvas2 = document.getElementById('c2');
const ctx2 = canvas2.getContext("2d")


let x = 0;
let y = 0;
let width = 10;

let ax = (Math.random() * 300).toFixed(0);
let ay = (Math.random()*150).toFixed(0);

let snake = {
    x : x,
    y : y,
    width :5,
    height :5
}

let apples = {
    x :ax,
    y :ay,
    width : 11,
    height : 12
}






const drawSnake = () => {
 
    ctx.fillStyle = "rgb(0, 162, 232)";
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
 
}

const makeApple = () => {
     let apple = new Image();
    apple.src = '/R.png'
    apple.onload = () => {ctx2.drawImage(apple,0,0,apples.width,apples.height, apples.x, apples.y,apples.width,apples.height );}
 
}


setInterval(makeApple, 3000);

makeApple();

drawSnake();
const delSnake = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     snake.y -= 10;
    } else if (num == 83) { // 'S'
        snake.y += 10;
    } else if (num == 65) { // 'A'
        snake.x -= 10;
    } else if (num == 68) { // 'D'
        snake.x += 10;
    }
    delSnake();
    drawSnake();
  }


 