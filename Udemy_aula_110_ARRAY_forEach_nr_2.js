console.log('\n***********\nARRAY - 5ª aula - forEach # 2 \n*****************\n')

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i <this.length; i++)
        callback(this[i], i, this)
}
const aprovados = ['Agatha','Aldo','Daniel','Joana']

aprovados.forEach2(function(nome, indice){
    console.log( `${1+indice}} ${nome}`)
})