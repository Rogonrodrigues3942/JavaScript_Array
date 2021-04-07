console.log('\n***********\nARRAY - 1ª aula - Visão Geral\n*****************\n')
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Rogério', 'Rafael','Samuel')
console.log(aprovados)

aprovados = ['Rogerio','Rafael','Samuel']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

console.log('\nManeiras de inserir novos elementos no array.')
aprovados[3] = 'Clara'
aprovados.push('Célia')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Perseu'
console.log(aprovados.length)
console.log(aprovados)
console.log()
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Rogerio','Rafael','Samuel']
console.log(aprovados)
aprovados.splice(0,1,'José', 'Ramon')
console.log(aprovados)