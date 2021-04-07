console.log('\n***********\nARRAY - 7ª aula - map # 2 - 1ª revisão\n*****************\n')

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}',
    '{"nome": "kit de lápis","preco": 41.55}'
]

const transformarEmObheto = json => JSON.parse(json) //1º passo - transformando JSON em objeto
const apenasPreco = produto => produto.preco    //2º passo - extraindo o valor do atributo preco

const resultado = carrinho.map(transformarEmObheto).map(apenasPreco)
console.log(resultado)