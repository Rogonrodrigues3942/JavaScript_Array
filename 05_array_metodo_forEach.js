console.log('\n................\nArray - Método forEach(função(elem, ind, obj)[,thisObjeto]) - página 139\n.......................')
let arr = [21, 3, 8, 'a', 290]
let msg = ' '
const funcaoUm = (el, id, obj) => msg += 'arr['+id+']'+el+'\n'
console.log(arr.forEach(funcaoUm))
