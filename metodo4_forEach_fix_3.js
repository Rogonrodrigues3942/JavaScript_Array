/*Fixando o conceito function forEach() - paginas 139 e 140*/

console.log("\n\n\tFunction forEach()\n\n")

var arr = [21, 3, 18, 'a', 290]

var msg = (elem, ind) => console.log("arr[" + ind + "] =" +elem)

arr.forEach(msg)