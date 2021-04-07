console.log('\n................\nArray - Propriedades do objeto Array - páginas 135 e 136\n.......................')
console.log('\n1) Criação de array e função construtora')
let arr = [3, 'a', 6, 4, 'd', 'e']
console.log(arr)
console.log(function(){console.log(arr.construtor)})

console.log('\n2) Propriedade length - tamanho do array')
let arr1 = new Array(1, 2, 3, 'a','b','c',{nome:'Maujor'})
let tam = arr1.length
//console.log(arr1)
console.log(tam)