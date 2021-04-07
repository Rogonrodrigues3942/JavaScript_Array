arr = [1,2,3,4,5,6,7,8,9,10]
const tabuada = a => 2*a
const filtro = (elem, ind) =>  ind > 4
console.log(arr.map(tabuada).filter(filtro))
console.log(arr.filter(filtro))