console.log('\n***********\nARRAY - 7ª aula - map # 2 \n*****************\n')

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lápis", "preco": 41.25}',
    '{"nome": "caneta", "preco": 7.50}'
]

console.log(carrinho)
/**Desafio: apresentar apenas preços dos elementos do array carrinho.
 * Solução: 3 passos:
 * 1º passo: transformar o JSON em Objeto;
 * 2º passo: extrair do objeto o valor do atributo preço.
 * 3º passo: aplicar as 2 duas funçoes sobre o array carrinho, respecitvamente na ordem de criação.
*/
console.log('\n Apresentado os preços dos produtos no carrinho de compras.\n')
/* 1º passo: transformar o JSON em Objeto.*/
const transformarEmObjeto = json => JSON.parse(json)

/* 2º passo: extrair do objeto o valor do atributo preço.*/
const apenasPreco = produto => produto.preco

/* 3º passo: aplicar as 2 duas funçoes sobre o array carrinho, respecitvamente na ordem de criação.*/
const resultado = carrinho.map(transformarEmObjeto)//.map(apenasPreco)
console.log(resultado)