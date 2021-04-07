console.log('\n***********\nARRAY - 6ª aula - map # 1 \n*****************\n')
const nums = [1, 2, 3, 4, 5]
console.log(nums)

/**A função map() executa um loop com propoósito de transforma o objeto com a ação desejada.*/
let resultado = nums.map(function(e){
    return e*2
}) 

console.log(resultado)

/**cRIANDO NOVAS FUNÇOES PARA MANIPULAR O ARRAY nums.*/
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)