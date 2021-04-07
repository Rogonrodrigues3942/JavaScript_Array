console.log('\n***********\nARRAY - 14ª aula - Imperativo vs Declarativo\n*****************\n')

const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

/*Modo Imperativo.*/
let total1 = 0
for(let i = 0; i < alunos.length; i++)
    total1 += alunos[i].nota

console.log(total1 / alunos.length)

//Modo Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => atual + total
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)