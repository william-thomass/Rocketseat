/*
 Estrutura de dados
Organização e gerenciamento dos dados
Melhor eficiência do código
[] Estruturas de repetição

laço de repetição
for [] Vetores (Arrays) [] Tipo de dado estruturado [] incremental (++): o valor + 1 [] Tipo de dado: undefined
*/

//for é um estrutura de repetição dentro do parentes
         //falar a ()instruação, ele vai repetir o bloco baseado no //que tiver na instrução(), primeiro criar uma variável de controle "let item = 0; quanto item for menor a 10 pegue um item e adicione mais 1
         // for = para
    let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
    const randomNumber = Math.round(Math.random()* 10)

    let xAttempts = 1

    while(Number(result) != randomNumber){
      result = prompt("Erro, tente novamente")
      xAttempts++
    }

    alert(`Parabésn!Você adivinhou o número em ${xAttempts} tentativas`)




