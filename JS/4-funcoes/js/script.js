// criando uma função
function minhaFuncao() {
    console.log("testando")
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function() {
    console.log("função em variavel")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")
funcaoComParametro("outra função")

// return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)

console.log(soma(c, d))