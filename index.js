const canvas = document.getElementById('c1');
const ctx = canvas.getContext("2d")


const canvas2 = document.getElementById('c2');
const ctx2 = canvas2.getContext("2d")


let x = 0;
let y = 0;
let width = 10;

let snake = {
    x : x,
    y : y,
    width :5,
    height :5
}

let apple = {
    x :0,
    y :0,
    width : 11,
    height : 12
}






const drawSnake = () => {
 
    ctx.fillStyle = "rgb(0, 162, 232)";
    ctx.fillRect(x, y, 5, 5);
 
}

const makeApple = () => {
     let apple = new Image();
    apple.src = '/R.png'
    apple.onload = () => {ctx2.drawImage(apple,0,0,11,12, (Math.random() * 300).toFixed(0), (Math.random()*150).toFixed(0),11,12 );}
 
}
makeApple();

setInterval(makeApple, 3000);



drawSnake();
const delSnake = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.onkeydown = function(event) {
    var num = event.keyCode;
    event.preventDefault();
    if (num == 87) { // 'W'
     y -= 10;
    } else if (num == 83) { // 'S'
     y += 10;
    } else if (num == 65) { // 'A'
      x -= 10;
    } else if (num == 68) { // 'D'
      x += 10;
    }
    delSnake();
    drawSnake();
  }


 