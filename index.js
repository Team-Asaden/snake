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
    width :10,
    height :10
}


// class Apples {
//     constructor() {
//         this.x = (Math.random() * 300).toFixed(0);
//         this.y = (Math.random() * 150).toFixed(0);
//         this.width = 11;
//         this.height = 12;
//     }
// }

let apples = {
    x :(Math.random() * 300).toFixed(0),
    y :(Math.random()*150).toFixed(0),
    width : 11,
    height : 12
}


// let apples = new Apples();



const drawSnake = () => {
 
    ctx.fillStyle = "rgb(0, 162, 232)";
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
 
}

const makeApple = () => {

//    let apples = new Apples();

apples.x = (Math.random() * 300).toFixed(0);
apples.y = (Math.random()*150).toFixed(0);

     let apple = new Image();
    apple.src = '/R.png'
    apple.onload = () => {ctx2.drawImage(apple,0,0,apples.width,apples.height, apples.x, apples.y,apples.width,apples.height );}
 
}


//setInterval(makeApple, 1000);

makeApple();

drawSnake();
const delSnake = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}





const colisionan = (snake, apples) => {
    return snake.x < apples.x + apples.width &&
           snake.x + snake.width > apples.x &&
           snake.y < apples.y + apples.height &&
           snake.y + snake.height > apples.y;
};


setInterval(() => {
    if (colisionan(snake, apples)) {
        console.log('Los objetos colisionan');
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        snake.width += 5;
        makeApple();
    } else {
        console.log('Los objetos no colisionan');
    }
}, 1000);










window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     snake.y -= 5;
    } else if (num == 83) { // 'S'
        snake.y += 5;
    } else if (num == 65) { // 'A'
        snake.x -= 5;
    } else if (num == 68) { // 'D'
        snake.x += 5;
    }
    delSnake();
    drawSnake();
  }


 