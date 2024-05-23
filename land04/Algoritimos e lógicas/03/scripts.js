/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/


let student = prompt('Qual o nome do aluno?')
let noteOne = prompt('Primeira nota:')
let noteTwo = prompt('Segunda nota:')
let noteThree = prompt('Terceira nota:') 

let average = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3

let result = average > 6
average = average.toFixed(2)

if (result){
  alert(`Parabéns ${student} Você passou! sua média foi ${average}`)
 } else if (average < 3 ){
  alert(`${student} infelizmente você Reprovou!Sua média foi ${average}`)

  }else {
    alert(`${student}, está em recuperação, estude para aprovar em sua próxima prova! Sua média foi ${average}`)
  }


  





