let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const scoreField = document.querySelector('.score');
const highscoreField = document.querySelector('.highscore');
const guessField = document.querySelector('.guess');
const numberField = document.querySelector('.number');
const messageField = document.querySelector('.message');

console.log('El campo score tiene el valor de ' + scoreField.textContent);

function displayMessage(msg) {
  messageField.textContent = msg;
}
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
   const guess = Number(guessField.value);

    if (!guess) displayMessage('Introduce un número');
    else if (guess === secretNumber) {
        displayMessage('Has acertado!!')
        if(score > highScore){
            highScore = score;
            highscoreField.textContent = highScore;
        }
        //TODO: VISUALIZAR EL NÚMERO, CAMBIAR ESTILOS
        //PROPIEDAD STYLE Y NOTACION ESTILOS EN camelCase
        //ejemplo : backgroundcolor -> backgroundColor


    }else if(score>1){
        displayMessage(guess > secretNumber ? 'Demasiado alto' : 'Demasiado bajo');
        score-=1;
        scoreField.textContent = score;
    }else{
        displayMessage('Has perdido');
        scoreField.textContent = 0;
    }
   //TODO:
    //Funcionalidad boton again

    document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage('Start guessing...');
    scoreField.textContent = score;
    numberField.textContent = '?';
    guessField.value = '';

    document.body.style.backgroundColor = 'green';
    numberField.style.width = '15rem';
});
});