/*Método forEach() - versão 6  -  27/062021 - capitulo 5: páginas 139 e 140

Este método percorre cada um dos elementos de uma array e ececuta uma faunção callback. Não altera o array original e 
admite um argumento obrigatório que é a função callback, também um argumento opcional.

A função é executada para cada um dos elementos do array e o valor retornado é insrido em um novo array, que é originado 
com a aplicação da funcão.*/

console.log("\tEstudando o método forEach()\n")

var arr  = [21, 3, 18, "a", 290]

const texto = (elem, ind, obj) => (console.log("arr = [" + ind + "] = " + elem))

arr.forEach(texto)