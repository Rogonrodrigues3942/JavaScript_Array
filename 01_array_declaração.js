console.log('\n................\nArray - Declarações e inicializações\n.......................')
console.log('1) Criando um array sem dados')
let meuArray = new Array
console.log(typeof meuArray, meuArray === Array)
console.log(meuArray)
meuArray[0] = 'Rogerio'
meuArray[1] = 13
meuArray[2] = {cidade: 'São Paulo', dinheiro: 13}
console.log(meuArray)

console.log('\n2) - Criando array1 com dados')
let meuArray1 = new Array('casa', 'rio',5,'Joinville', 125)
console.log(meuArray1)
console.log(meuArray1[0])
console.log(meuArray1[3], meuArray1[4])

console.log("\n3) Array#2 contendo elementos do tipo objeto")

let meuArray2 = new Array({nome: 'Rogerio'},'casa', 'rio',5,'Joinville', 125)
console.log(meuArray2)
console.log(meuArray2[0])
console.log(meuArray2[0].nome)
console.log(meuArray2[0]['nome'])


console.log(meuArray2[3], meuArray2[4])

console.log('\n4) Array3 - declaração com sintaxe literal')
meuArray3 = [13, '49', 500]
console.log(meuArray3)
console.log(meuArray3[2])
meuArray3[1]