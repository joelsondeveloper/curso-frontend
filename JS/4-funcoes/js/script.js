// // criando uma função
// function minhaFuncao() {
//     console.log("testando")
// }

// minhaFuncao()
// minhaFuncao()

// const minhaFuncaoEmVariavel = function() {
//     console.log("função em variavel")
// }

// minhaFuncaoEmVariavel()

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Imprimindo alguma coisa")
// funcaoComParametro("outra função")

// // return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2
// }

// const resultado = soma(a, b)

// console.log(resultado)

// console.log(soma(c, d))

// // escopo da função
// let y = 10

// function testandoEscopo () {
//     let y = 20
//     console.log(`Y dentro da função é ${y}`)
// }

// console.log(`Y fora da função é ${y}`)

// testandoEscopo()

// // escopo aninhado
// let m = 10

// function escopoAninhado() {

//     let m = 20

//     if(true) {
//         let m = 30
    
//         if(true) {
//             let m = 40
//             console.log(m)
    
//         }
//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado()

// console.log(m)

// // arrow function

// const testArrow = () => {
//     console.log("esta é uma arrow function")
// }

// testArrow()

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par")
//         return
//     }

//     console.log("Impar")
// }

// parOuImpar(5)

// parOuImpar(10)

// // mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x * x
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x * x

// console.log(raizQuadrada2(12))

// const helloWord = () => console.log("Hello word")

// helloWord()

// // argumentos opcionais

// const multiplication = function(m, n) {

//     if(n === undefined) {
//         return m * 2
//     } else {
//         return m * n
//     }
// }

// console.log(multiplication(5))
// console.log(multiplication(2, 4))

// const greeting = (name) => {

//     if(!name) {
//         console.log("olá")
//         return
//     }

//     console.log(`Ola, ${name}`)
// }

// greeting("Joelson")

// valor default
// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}`
// }

// console.log(customGreeting("Maria"))

// console.log(customGreeting("Jose", "Bom dia"))

// const repeatText = (text, repeat = 2) => {

//     for(let i = 0; i < repeat; i++) {
//         console.log(text)
//     }
// }

// console.log(repeatText("olá"))
// console.log(repeatText("olá2", 5))

// // closure

// function someFunction() {
//     let txt ="Faça alguma coisa"

//     function display() {
//         console.log(txt)
//     }
//     display()
// }

// someFunction()

// // mais sobre closure
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n * m
//     }
// }

// const c1 = multiplicationClosure(5)
// const c2 = multiplicationClosure(10)

// console.log(c1)
// console.log(c2)

// console.log(c1(5))
// console.log(c2(10))

// // recursão
// const untilTen = (n, m) => {
//     if(n < 10) {
//         console.log("A função parou de executar")
//     } else {
//         const x = n - m

//         console.log(x)

//         untilTen(x, m)
//     }
// }

// untilTen(100, 7)

// function factorial(x) {
//     if(x === 0) {
//         return 1
//     } else {
//         return x * factorial(x - 1)
//     }
// }

// const num = 6

// const result = factorial(num)

// console.log(`O fatorial do numero ${num} é ${result}`)

// desafios de fixação
// desafio 1 - cumprimentar

// const cumprimentar = (nome) => {

//     return `Olá, ${nome}!`
// }

// console.log(cumprimentar("joão"))

// // desafio 2 - calcular Media

// const calcularMedia = (n) => {

// let total = 0

// for(let i = 0; i < n.length; i++) {
//     total = total + n[i]
// }

// return total / n.length
// }

// console.log(calcularMedia([1, 2, 3, 4, 5]))
// console.log(calcularMedia([10, 20, 30, 40, 50]))

// desafio 3 - sequencia de fibonacci

// const sequenciaFibonacci = (num) => {
//     let fibonacci = [0, 1]

//     for(let i = 2; i < num; i++) {

//         fibonacci.push( fibonacci[i-2 ]+ fibonacci[i-1])
//     }
//     return fibonacci
// }

// console.log(sequenciaFibonacci(7))
// console.log(sequenciaFibonacci(10))

// desafio 4 - verificar anagramas

// const saoAnagramas = (palavra1, palavra2) => {

//     if(palavra1.length !== palavra2.length) {
//         return false
//     }
//     const palavra1Array = palavra1.split("")
//     const palavra2Array = palavra2.split("")
//     return palavra2Array.sort().join("") == palavra1Array.sort().join("")

// }

// console.log(saoAnagramas("listen", "silent"));

// fatorial
const  calcularFatorial = (n) => {
    if(n === 0) {
        return 1
    }

    let fatorial = n
    for(let i = n - 1; i > 0; i--) {
        fatorial = fatorial * i
    }

    return fatorial
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(0))
console.log(calcularFatorial(3))