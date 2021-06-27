var num = [1, 2, 3, 4, 5]
var letra = ['a', 'b', 'c', 'd', 'e']

const checar = (elem, ind) => console.log("arr[" + ind + "] = " + (typeof elem == "number"))

letra.forEach(checar)
num.forEach(checar)