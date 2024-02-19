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
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Maria"))

console.log(customGreeting("Jose", "Bom dia"))

const repeatText = (text, repeat = 2) => {

    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

console.log(repeatText("olá"))
console.log(repeatText("olá2", 5))