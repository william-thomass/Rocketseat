/*-------------------------------------------------------functionhoisting---------------------------------------------------*/


/*
SayMyName()

function SayMyName(){
  console.log('William')
}
------------------------------------------
-------ARROW FUNCTION--------------------
------------------------------------------

*/
// 

/*const SayMyName = () => {
  console.log('William')
}

SayMyName()

------------------------------------------
------FUNCTION() CONTRUCTOR
------------------------------------------
function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }
}

const william = new Person('William')
const joao = new Person('João')
console.log(william.walk())
console.log(joao.walk())


*/

/*
------------------------------------------
------PROTOTYPE-------------------------
------------------------------------------
* prototype-based language
* prototype chain
* __proto__
*/
/*-----------------------------------------
------MANIPULANDO ARRAYS-----------------
------------------------------------------
*/
let techs = ["html","javascript","css"]

// ADICIONAR UM ITEM NO FIM

techs.push("nodejs")

//adicionar no começo

techs.unshift("php")

//remover do fim

//techs.pop()

//remover inicio

//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(0,3))

//remover 1 ou mais itens de qualquer posição do array


console.log(techs.splice(3)) 

//encontrar a posição de um elentro no array

let index = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs)







