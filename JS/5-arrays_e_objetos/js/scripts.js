// // arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof lista)

// const itens = ["Matheus", true, 2, 4.12, []]

// console.log(itens)
// // mais sobre arrays
// const arr = ["a", "b", "c", "d",]

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[95])

// // propiedades
// const numbers = [5, 3, 4]

// console.log(numbers.length)

// console.log(numbers["length"])

// const myName = "Matheus"

// console.log(myName.length)

// // metodos
// const otherNumbers = [1, 2, 3]

// const allNumbers = numbers.concat(otherNumbers)

// console.log(allNumbers)

// const text = "algum texto"

// console.log(text.toUpperCase())

// console.log(typeof text.toUpperCase)

// console.log(text.indexOf("g"))

// // objetos
// const person = {
//     name: "Joelson",
//     age: 18,
//     job: "progamador"
// }

// console.log(person)

// console.log(person.name)

// console.log(person.name.length)

// console.log(typeof person)

// criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 2000
// }

// console.log(car)

// car.doors = 4

// console.log(car)

// delete car.km
// console.log(car)

// // mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)

// console.log(obj2)
// console.log(obj)

// // conhecendo melhor os objetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// // mutability
// const a = {
//     name: "Joelson"
// }

// const b = a
// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 31

// console.log(a)
// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// loop em array
const users = ["Matheus", "Joao", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++) {
    console.log(`listando o usuario: ${users[i]}`)
}

// push e pop
const array = ["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)

array.push("x", "y", "z")

console.log(array)

// shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
letters.unshift("z")

console.log(letters)

// indeOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))
console.log(myElements.lastIndexOf("Mamão"))

// slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(testeSlice)
console.log(subArray)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)