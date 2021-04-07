console.log('\n***********\nARRAY - 10ª aula - função filter( ) # 2 \n*****************\n')

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++ )
        if(callback(this[i], i, this))
            newArray.push(this[i])
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPod Pro', preco: 4100, fragil: true},
    {nome: 'Copo de Vidro', preco: 13, fragil: true},
    {nome: 'Copo de Plástico', preco: 19, fragil: false}
]

console.log(produtos.filter2(function(p){
    return true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter2(fragil))
console.log(produtos.filter2(caro))