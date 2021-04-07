console.log('\n***********\nARRAY - 12ª aula - função reduce( ) # 1 \n*****************\n')
const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bosista: true}
]

const resultado = alunos.map(a =>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+atual
})

console.log(resultado)