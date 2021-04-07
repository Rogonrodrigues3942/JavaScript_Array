console.log('\n***********\nARRAY - 8ª aula - map # 3 \n*****************\n')

Array.prototype.map2 = function(callback){
        const newArray = []
        for(let i = 0; i < this.length; i++)
            newArray.push(callback(this[i], i, this))
        
        return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}',
    '{"nome": "kit de lápis","preco": 41.55}'
]

const transformarEmObheto = json => JSON.parse(json) //1º passo - transformando JSON em objeto
const apenasPreco = produto => produto.preco    //2º passo - extraindo o valor do atributo preco

const resultado = carrinho.map2(transformarEmObheto).map2(apenasPreco)
console.log(resultado)