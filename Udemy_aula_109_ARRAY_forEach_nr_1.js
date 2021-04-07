console.log('\n***********\nARRAY - 4ª aula - forEach # 1 \n*****************\n')
console.log('\n1º caso - Função em forEach.')
const aprovados = ['Agatha','Aldo','Daniel','Joana']

aprovados.forEach(function(nome, indice){
    console.log( `${1+indice}} ${nome}`)
})

/**Ao se escrever uma função forEach( )para array e solicita a impressão, primeiro é mostrado o valor do
 * elemento e depois a posição do mesmo. */

 console.log('\n2º caso - Função arrow em for Each.')
 aprovados.forEach(nome => console.log(nome))

console.log('\n3º caso - Armazenando função arrow em constantes')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)