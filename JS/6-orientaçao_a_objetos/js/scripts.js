// metodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
}
console.log(animal.nome)

animal.latir()

// aprofundando em metodos
const pessoa = {

    nome: "Joelson",

    getNome: function () {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("Marcos")

console.log(pessoa.getNome())

// prototype
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []



console.log(Object.getPrototypeOf(arr))