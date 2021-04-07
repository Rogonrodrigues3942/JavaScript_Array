console.log('\n................\nArray - Método slice(arg1[,arg2]) - página 150\n.......................')
/**Este método retorna um subarray do array em voga. Admite um ou dois argumentos que definem
 * o índice inicial e o final do subarray a extrair.*/
let arr = [1,2,3,4,'a','b','c']
console.log('O array original: ', arr)
console.log('O subarray inicia no indice 2 e terimina no índice 5',arr.slice(2,5))
console.log('O subarray inicia no indice 2 e terimina no índice 6',arr.slice(2,6))
console.log('O subarray inicia no indice 3 e termina no útlimo indice do array original',arr.slice(3))
console.log('O subarray inicia no indice -4 e terimina no índice 0',arr.slice(-4))
console.log('O subarray inicia no indice 0 e terimina no índice 4',arr.slice(0,4))

