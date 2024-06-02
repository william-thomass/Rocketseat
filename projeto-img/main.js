import {Modal} from "./modal.js"
import {alertError} from "./alert-error.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const inputClick = document.querySelector('.input-wrapper')


//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')



inputClick.onclick = function(){

  alertError.close()
}


form.onsubmit = function(event){
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError){
    alertError.open()
    return;
  }

  alertError.close()

 const result = IMC(weight, height)
 const message = `Seu IMC é de ${result}`
 
 //modalWrapper.classList.add('open')
 Modal.open()
  if(result<18.5){
  Modal.message.innerText = `${message}  
  Você está abaixo do peso ideal!`
 }
 else if(result > 24.9){

  Modal.message.innerText = `${message}  
  Você está acima do peso ideal!`
 }

 else{
  Modal.message.innerText = `${message} 
  Você está no peso ideal!`
 }



}


function notANumber(value){
  return isNaN(value) || value == "" 
  
}

function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}