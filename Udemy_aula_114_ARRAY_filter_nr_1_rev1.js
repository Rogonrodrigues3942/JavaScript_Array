console.log('\n***********\nARRAY - 9ª aula - função filter( ) # 1 - 1ª revisão\n*****************\n')
const produto = [
    {nome: 'notebook', preco: 2500, fragil: true},
    {nome: 'iPod Pro', preco: 4100, fragil: true},
    {nome: 'Copo de Vidro', preco: 13, fragil: true},
    {nome: 'Copo de Plástico', preco: 19, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produto.filter(fragil))
//console.log(produto.filter(caro))
console.log(produto.filter(fragil).filter(caro))