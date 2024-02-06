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
// const users = ["Matheus", "Joao", "Pedro", "Miguel"]

// for(let i = 0; i < users.length; i++) {
//     console.log(`listando o usuario: ${users[i]}`)
// }

// // push e pop
// const array = ["a", "b", "c"]

// array.push("d")

// console.log(array)

// console.log(array.length)

// array.pop()

// console.log(array)

// const itemRemovido = array.pop()

// console.log(itemRemovido)
// console.log(array)

// array.push("x", "y", "z")

// console.log(array)

// // shift e unshift
// const letters = ["a", "b", "c"]

// const letter = letters.shift()

// console.log(letter)
// console.log(letters)

// letters.unshift("p", "q", "r")
// letters.unshift("z")

// console.log(letters)

// // indeOf e lastIndexOf
// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

// console.log(myElements.indexOf("Maçã"))
// console.log(myElements.indexOf("Abacate"))

// console.log(myElements[2])
// console.log(myElements[myElements.indexOf("Abacate")])

// console.log(myElements.lastIndexOf("Abacate"))
// console.log(myElements.lastIndexOf("Mamão"))

// // slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4)

// console.log(testeSlice)
// console.log(subArray)

// const subArray2 = testeSlice.slice(2, 4 + 1)

// console.log(subArray2)

// const subArray3 = testeSlice.slice(10, 20)

// console.log(subArray3)

// const subArray4 = testeSlice.slice(2)

// console.log(subArray4)

// // forEach
// const nums = [1, 2, 3, 4, 5]

// nums.forEach((numero) => {
//     console.log(`o numero é ${numero}`)
// })

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JS"},
//     {title: "Terceiro post", category: "Python"}
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title} da categoria ${post.category}`)
// })

// // includes
// const brands = ["BMW", "VW", "Fiat"]

// console.log(brands.includes("Fiat"))

// console.log(brands.includes("kIA"))

// if(brands.includes("BMW")) {
//     console.log(`Há carros da marca BMW`)
// }

// // reverse
// const reverseTest = [1, 2, 3, 4, 5]

// reverseTest.reverse()

// console.log(reverseTest)

// trim
// const trimTest = " testando \n "

// console.log(trimTest)

// console.log(trimTest.trim())

// console.log(trimTest.length)
// console.log(trimTest.trim().length)

// // padStart
// const testePadStart = "1"

// const newNumber = testePadStart.padStart(4, "0")

// console.log(testePadStart)

// console.log(newNumber)

// const testePadEnd = newNumber.padEnd(10, "0")

// console.log(testePadEnd)

// // split
// const frase = "O rato roeu a roupa do rei de roma"

// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)

// // join
// const fraseDenovo = arrayDaFrase.join(" ")

// console.log(fraseDenovo)

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

// console.log(fraseDeCompra)

// // repeat
// const palavra = "Testando "

// console.log(palavra.repeat(5))

// // Rest Operator
// const somaInfinita = (...args) => {
//     let total = 0

//     for(let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//     return total
// }

// console.log(somaInfinita(1, 2, 3))
// console.log(somaInfinita(1, 2, 3, 567, 34, 605, 378, 23, 486))

// for...of
// const somaInfinita2 = (...args) => {

//     let total = 0

//     for(num of args) {
//         total += num
//     }

//     return total
// }

// console.log(somaInfinita2(1, 2, 3))
// console.log(somaInfinita2(1, 2, 3, 567, 34, 605, 378, 23, 486))

// // destruturing
// const userDetails = {
//     firstName: "Joelson",
//     lastName: "Vicente",
//     job: "Progamador"
// }

// const {firstName, lastName, job} = userDetails

// console.log(firstName, lastName, job)

// // renomear variaveis
// const {firstName: primeiroNome } = userDetails

// console.log(firstName)

// // destructing com arrays
// const myList = ["avião", "submarino", "carro"]

// const [veiculoA, veiculoB, veiculoC] = myList

// console.log(veiculoA, veiculoB, veiculoC)

// // JSON
// const myJSON = '{"name": "Matheus", "age": 31, "skills": ["PHP", "Javascript", "Python"]}'

// // JSON para objeto e objeto para JSON

// const myObject = JSON.parse(myJSON)

// console.log(myObject)

// console.log(myObject.name)

// console.log(typeof myObject)

// // json invalido
// const badJson = '{"name": Joelson, "age": 31}'

// // const myBadObject = JSON.parse(badJson)

// myObject.isOpenToWork = true

// console.log(myObject)

// const myNewJson = JSON.stringify(myObject)

// console.log(myNewJson)

// console.log(typeof myNewJson)

// desafio 1 - mesclar arrays
// const mesclarArrays = (array1, array2) => {

//     return [...array1, ...array2]
// }

// console.log(mesclarArrays([42, "Olá, mundo!", true], ["Maçã", 3.14, false]));

// // desafio 2 - filtrar objetos
// const filtrarObjetos = (array, condicao) => {

//     let condicaoVerdadeira = []
//     let nota = 0

//     for(let i = 0; i < array.length; i++) {

//         nota = array[i].nota
        
//         if(eval(condicao)) {

//             condicaoVerdadeira.push(array[i])
//         }
//     }

//     return condicaoVerdadeira
// }

// const alunos = [
//     { nome: 'Alice', idade: 25, nota: 8.5 },
//     { nome: 'Bob', idade: 30, nota: 7.8 },
//     { nome: 'Charlie', idade: 20, nota: 9.2 },
//   ]

// console.log(filtrarObjetos(alunos, 'nota > 8'))

// // desafio 3 - encontrar duplicatas
// const encontrarDuplicatas = (array) => {

//     const arraySort = array.sort()
//     let arrayDuplicata = [

//     ]
//     for(let i = 0; i < array.length - 1; i++) {

//         if(arraySort[i] === arraySort[i + 1]) {

//             arrayDuplicata.push(arraySort[i])
//         }
//     }

//     return arrayDuplicata
// }

// console.log(encontrarDuplicatas([1, 2, 3, 4, 5, 2, 7, 8, 3]));

// // desafio 4 - ordenar por propriedade
// const ordenarPorPropriedade = (array, propriedade) => {

//     const ordenar = parseInt(propriedade)
//     return array.sort((a, b) => a[propriedade] - b[propriedade])
// }

// console.log(ordenarPorPropriedade([
//     { nome: 'Laptop', preco: 1200 },
//     { nome: 'Smartphone', preco: 800 },
//     { nome: 'Tablet', preco: 500 },
// ], 'preco'));

// // desafio 5 - converter para objeto
// const converterParaObjeto = (chaves, valores) => {

//     const object = {}

//     for(let i = 0; i < chaves.length; i++) {

//         object[chaves[i]] = valores[i]
//     }

//     return object
// }

// console.log(converterParaObjeto(['nome', 'idade', 'cidade'], ['Alice', 25, 'São Paulo']));