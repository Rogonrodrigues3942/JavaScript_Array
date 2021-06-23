/*Estudando a function forEach, a função é executada para cada um elementos de um array e o retorno
ocorre em vetor resultado, o vetor inicial não é alterado. - 23/06/2021*/

console.log("\n\tEstudando e fixando function forEach()\n")
 var mix = ["Rogério", "Rafael", "Samuel", 50, 17, 10]
 const msg = (elem, ind) => console.log("arr["+ ind +"] = "+ elem)
 console.log(mix.forEach(msg))