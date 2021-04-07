console.log('\n***********\nARRAY - 3ª aula - Simulando array com objeto\n*****************\n')
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Samuel'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0], quaseArray.toString())
const meuArray = ['Rafael','Ana','Samuel']
console.log(quaseArray.toString(),meuArray)