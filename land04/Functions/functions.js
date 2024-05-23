// function expression
// function anonymous sum = somar
// parâmetros(parameters)

/*const sum = function(number1, number2){

  console.log(number1 + number2)

} 

sum(2, 3) // arguments - argumentos

*/

/*const sum = function(number1, number2){
   let total = number1 + number2
  return total


} 

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é  ${sum(number1, number2)}`)*/

/*function estojo(caneta1, caneta2){
  return caneta1 + caneta2
}

let caderno = estojo('azul', 'vermelha')

console.log(caderno)

function GuardaRoupas(roupa1, roupa2){
return roupa1 + roupa2
}

let people = GuardaRoupas('camisa', 'calça')
console.log(people)

function programmer(linguagem1){
  return linguagem1 
}

let navigator = programmer('JavaScript')

console.log(navigator)
*/

let programmer = 'PHP'

function navigator(){
  programmer = 'JavaScrpit'
  return programmer

}

console.log(programmer)
console.log(navigator(programmer))
console.log(programmer)
