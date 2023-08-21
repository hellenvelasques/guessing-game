const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

btnReset.addEventListener('click', handleResetClick);
btnTry.addEventListener('click', handleTryClick);
document.addEventListener('keydown', handleKeypress); 

function handleTryClick(e) {
  e.preventDefault();
  
  const inputNumber = document.querySelector('#inputNumber');


  if (inputNumber.value === ''){
    console.log(inputNumber)
    alert("Ooops, o campo não pode ser vazio. Digite um número entre 0 e 10, tente novamente!")
  } else if(Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`
  } else if (inputNumber.value < 0 ) {
    alert("Ooops, algo deu errado. Digite um número entre 0 e 10, tente novamente!")
  } else if (inputNumber.value > 10) {
    alert("Ooops, algo deu errado. O número digitado é maior que 10. Tente novamente!")
  }
  
  inputNumber.value = '';
  xAttempts++
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function handleKeypress(e) {
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}