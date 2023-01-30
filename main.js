const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 0;

btnTry.addEventListener('click', handleTryclick)
btnAgain.addEventListener('click', handleAgainclick)
document.addEventListener("keypress", press)

function press(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleAgainclick()
  }

}

function handleTryclick(event) {
  event.preventDefault()

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
  } 
  else if (Number(inputNumber.value) == '') {
    alert("Digite um número")
  }

  xAttempts++

  if (xAttempts > 1) {
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  } else if (xAttempts == 1) {
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa`
  }

  inputNumber.value = ""
}

function handleAgainclick() {
  toggleScreen()
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);

}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}