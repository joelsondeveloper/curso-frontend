// variaveis
// let nome = "Matheus"

// console.log(nome)

// nome = "Joelson Vicente"

// console.log(nome)

// const idade = 31

// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)

// // mais sobre variaveis
// // let 2teste = "invalido"
// // let @teste = "invalido"

// let a = 10,
//  b = 20,
//  c = 30

//  console.log(a, b, c)

//  const nomecompleto = "pedro"
//  const nomeCompleto = "Joelson Vicente"

//  console.log(nomecompleto)
//  console.log(nomeCompleto)

//  let _teste = "ok"
//  let $teste = "ok"

//  console.log(_teste, $teste)

//  prompt
// const age = prompt("digite a sua idade")

// console.log(`você tem a idade de ${age} anos`)

// alert
// alert("testando")

// const z = 10
// alert(`o numero Z é igual a ${z}`)

// math.x
// console.log(Math.max(5, 2, 1, 10))
// console.log(Math.floor(5.14))
// console.log(Math.ceil(5.14))

// // console.x
// console.log("teste!")
// console.error("erro!")
// console.warn("aviso!")

// if
// const m = 10

// if(m > 5) {
//     console.log("M é maior que 5")
// }

// const user = "joão"

// if(user === "joão") {
//     console.log("seu nome é joão")
// }

// if(user === "maria") {
//     console.log("seu nome é maria")
// }
// console.log(user === "joão", user === "maria")

// // else
// const loggedin = false

// if(loggedin) {
//     console.log("esta autenticado")
// } else {
//     console.log("não está autenticado")
// }

// const q = 10
// const w = 15

// if(q > 5 && w > 20) {
//     console.log("numeros mais altos")
// } else {
//     console.log("numeros não são mais altos")
// }

// // else if
// if(1 > 2) {
//     console.log("teste")
// } else if(2 > 3) {
//     console.log("teste 2")
// } else if(5 > 1) {
//     console.log("agora sim!")
// }

// const username = "matheus"
// const userage = 31

// if(username === "josé") {
//     console.log("Bem vindo José")
// } else if(username === "matheus" && userage === 31) {
//     console.log("olá matheus você tem 31 anos")
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// while
// let p = 0

// while(p < 5) {
//     console.log(`Repetindo ${p}`)
//     p++
// }

// do while
// let o = 10

// do {
//     console.log(`valor de o: ${o}`)
//     o--
// } while(o > 1)

// for
for(let t = 0; t < 10; t++) {
    console.log(`repetindo ${t} vezes`)
}

let r = 10

for(r; r > 0; r--) {
    console.log(`o r esta diminuindo ${r}`)
}

// identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`maior que 10 ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// break
for(let g = 20; g > 10; g--) {
    console.log(`o valor de g é ${g}`)

    if(g === 15) {
        console.log("o g é 15")
        break
    }
}

// continue
for(let s = 1; s < 10; s++) {
    // operador resto = %
    if(s % 2 === 0) {
        console.log("numero par")
        continue
    }
    console.log(`${s}`)
}

// switch
const job = "engenheiro"

switch(job) {
    case "progamador" :
        console.log("você é um progamador")
        break
    case "advogado" :
        console.log("você é um advogado")
        break
    case "engenheiro" :
        console.log("você é um engenheiro")
        break
    default:
        console.log("profissão não encontrada")
}