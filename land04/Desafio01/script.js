const numberOne = Number(prompt('Digite o primeiro número: ' ))
const numberTwo = Number(prompt('Digite o segundo número: ' ))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo



alert('A soma dos dois números é: ' + sum.toFixed(2) )
alert('A subtração dos dois números é: ' + sub.toFixed(2) )
alert('A multiplicação dos dois números é: ' + mult.toFixed(2))
alert('A divisão dos dois números é: ' + div.toFixed(2) )
alert('O resto da divisão dos dois números é: ' + rest.toFixed(2))

if (sum % 2 === 0){
  alert('A soma dos dois números é par '+ sum.toFixed(2))  

}else {
  alert('A soma dos dois números é ímpar ' + sum.toFixed(2))
}

if(numberOne === numberTwo){
  alert('Os números inseridos são iguais')
}else {
  alert('Os números inseridos são diferentes')
}

