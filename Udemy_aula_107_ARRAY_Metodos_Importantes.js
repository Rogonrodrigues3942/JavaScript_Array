console.log('\n***********\nARRAY - 2ª aula - Métodos Importantes\n*****************\n')

const pilotos = ['Alonso','Vettel', 'Raikkonen','Massa']
console.log(pilotos)
pilotos.pop( )      /**Remove o último elemento da lista */
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift()
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
pilotos.splice(3,2)
console.log(pilotos)