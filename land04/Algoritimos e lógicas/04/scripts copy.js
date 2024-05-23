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

  let items = [];

  for(item=0; item <10; item++){
    let itemName = prompt('Qual o nome do item ?' + (item + 1))
    items[item] = itemName

  }

alert(items)



