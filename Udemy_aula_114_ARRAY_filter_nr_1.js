console.log('\n***********\nARRAY - 9ª aula - função filter( ) # 1 \n*****************\n')
const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPod Pro', preco: 4100, fragil: true},
    {nome: 'Copo de Vidro', preco: 13, fragil: true},
    {nome: 'Copo de Plástico', preco: 19, fragil: false}
]

console.log(produtos.filter(function(p){
    return true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(fragil))
console.log(produtos.filter(caro))