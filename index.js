const canvas = document.getElementById('c1');
const ctx = canvas.getContext("2d")


const canvas2 = document.getElementById('c2');
const ctx2 = canvas2.getContext("2d")


let x = 0;
let y = 0;
let width = 10;

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



  //colicionan ??

  /**Sí, puedes verificar si dos objetos en diferentes canvas colisionan, pero necesitarás manejar las coordenadas de los objetos de manera global. Aquí te dejo un ejemplo de cómo podrías hacerlo:

JavaScript

// Obtén los contextos de los dos canvas
const ctx1 = document.getElementById('canvas1').getContext('2d');
const ctx2 = document.getElementById('canvas2').getContext('2d');

// Define tus objetos (en este caso, rectángulos)
let objeto1 = {x: 10, y: 10, width: 50, height: 50};
let objeto2 = {x: 70, y: 70, width: 50, height: 50};

// Función para verificar si dos objetos colisionan
const colisionan = (obj1, obj2) => {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
};

// Verifica si los objetos colisionan
if (colisionan(objeto1, objeto2)) {
    console.log('Los objetos colisionan');
} else {
    console.log('Los objetos no colisionan');
}
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.
En este código, colisionan es una función que toma dos objetos y verifica si sus áreas se superponen. Si es así, devuelve true; de lo contrario, devuelve false. Puedes usar esta función para verificar la colisión entre cualquier par de objetos, independientemente del canvas en el que se dibujen.

Espero que esto te ayude. Si tienes alguna otra pregunta, no dudes en hacerla. 😊 */