console.log('\n***********\nARRAY - 13ª aula - função reduce( ) # 2 \n*****************\n')

const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bosista: true}
]
/* 1º Desafio - todos os alunos são bolsistas?*/
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/* 2º Desafio - Algum bolsista?*/
const bolsista = (resultado,bolsista) => bolsista || resultado
console.log(alunos.map(a => a.bolsista).reduce(bolsista))