// metodos
// const animal = {
//     nome: "Bob",
//     latir: function() {
//         console.log("Au au")
//     }
// }
// console.log(animal.nome)

// animal.latir()

// // aprofundando em metodos
// const pessoa = {

//     nome: "Joelson",

//     getNome: function () {
//         return this.nome
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome
//     }
// }

// console.log(pessoa.nome)

// console.log(pessoa.getNome())

// pessoa.setNome("Marcos")

// console.log(pessoa.getNome())

// // prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text))

// const bool = true

// console.log(Object.getPrototypeOf(bool))

// const arr = []



// console.log(Object.getPrototypeOf(arr))
// console.log(Object.getPrototypeOf(arr) === Array.prototype)

// // mais sobre prototypes
// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject))

// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject)

// console.log(mySecondObject.a)

// console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// classes basicas
// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro)

// pastorAlemao.raca = "Pastor alemão"

// console.log(pastorAlemao)

// console.log(pastorAlemao.patas)

// const bulldog = Object.create(cachorro)

// bulldog.raca = "Bulldog"

// console.log(bulldog)

// // funções construtoras
// function criarCachorro(nome, raca) {

//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("Bob", "Vira lata")

// console.log(bob)

// const jack = criarCachorro("Jack", "Poodle")

// console.log(jack)

// console.log(Object.getPrototypeOf(jack))

// // classes baseadas em funções
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro("Uzzy", "Husky")

// console.log(husky)

// // classes de função com métodos
// Cachorro.prototype.uivar = function() {
//     console.log("Auuuuuuu!")
// }

// husky.uivar()

// // classes es6
// class cachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new cachorroClasse("Jeff", "Pinscher")

// console.log(jeff)

// // mais sobre classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos
//         this.cor = cor

//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, "vermelho")

// console.log(scania)

// scania.descreverCaminhao()

// Caminhao.motor = 4

// const c2 = new Caminhao(4, "Preta")

// console.log(c2)
// console.log(c2.motor)

// Caminhao.prototype.motor = 4

// const c3 = new Caminhao(6, "Azul")

// console.log(c3.motor)

// // override
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const joelson = new Humano("Joelson", 18)

// console.log(joelson)

// console.log(Humano.prototype.idade)

// Humano.prototype.idade = "Não definida"

// console.log(joelson.idade)

// symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

// getters e setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você esta lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javascript, js"

console.log(myPost)