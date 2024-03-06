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
// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }

// const asas = Symbol()
// const pilotos = Symbol()

// Aviao.prototype[asas] = 2
// Aviao.prototype[pilotos] = 3

// const boeing = new Aviao("Boeing", 10)

// console.log(boeing)

// console.log(boeing[asas])
// console.log(boeing[pilotos])

// // getters e setters
// class Post {
//     constructor(titulo, descricao, tags) {
//         this.titulo = titulo
//         this.descricao = descricao
//         this.tags = tags
//     }

//     get exibirTitulo() {
//         return `Você esta lendo: ${this.titulo}`
//     }

//     set adicionarTags(tags) {
//         const tagsArrays = tags.split(", ")
//         this.tags = tagsArrays
//     }
// }

// const myPost = new Post("Algum post", "É um post sobre programação")

// console.log(myPost)

// console.log(myPost.exibirTitulo)

// myPost.adicionarTags = "programação, javascript, js"

// console.log(myPost)

// // herança
// class Mamifero {
//     constructor(patas) {
//         this.patas = patas
//     }
// }

// class Lobo extends Mamifero {
//     constructor(patas, nome) {
//         super(patas, patas)
//         this.nome = nome
//     }
// }

// const shark = new Lobo(4, "shark")

// console.log(shark)
// console.log(shark.patas)

// // instaceof
// console.log(shark instanceof Lobo)

// console.log(Lobo instanceof Mamifero)

// console.log(new Lobo(4, "teste") instanceof Mamifero)

// console.log(new Post("a", "b") instanceof Lobo)

// desafio 1 - sistema de cadastro
// class pessoas {
//     constructor(nome, email, senha) {
//         this.nome = nome
//         this.email = email
//         this.senha = senha
//     }

// }

// let user1 = new pessoas("Joelson", "joelson@email.com", 150106)
// let user2 = new pessoas("Lidyane", "lidyane@email.com", 123456)
// let totalPessoas = [user1, user2]

// const addPessoas = (nome, email, senha) => {

//     let user = new pessoas(nome, email, senha)
//     totalPessoas.push(user)

// return `${nome} logado com sucesso`
// }

// const autenticarPessoas = (email, senha) => {

//     for(let i = 0; i < totalPessoas.length; i++) {

//         if(email === totalPessoas[i].email && senha === totalPessoas[i].senha) {

//             return `${totalPessoas[i].nome} logado com sucesso`
//         }
//     }
//     return `usuario não está cadastrado no sistema`
// }

// const listarPessoas = () => {

//     return totalPessoas
// }

// // adicionar usuarios
// console.log(addPessoas("Maria", "maria@email.com", 858745));

// // autenticar usuarios
// console.log(autenticarPessoas("joelson@email.com", 150106));

// // listar usuarios
// console.log(listarPessoas());

// desafio 2 - carrinho de compras
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}
class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto, quantidade) {
    for (let i = 0; i < produtos.length; i++) {
      if (produto == produtos[i].nome && produtos[i].estoque > 0) {
        carrinhoComCompras.push(
          new Produto(produto, produtos[i].preco, quantidade)
        );

        produtos[i].estoque = produtos[i].estoque - quantidade;
        return carrinhoComCompras;
      }
    }

    return "produto fora de estoque";
  }

  calcularValorTotal() {
    let valorTotal = 0;
    for (let i = 0; i < carrinhoComCompras.length; i++) {
      valorTotal += carrinhoComCompras[i].preco * carrinhoComCompras[i].estoque;
    }

    return `seu carrinho de compras ficou no valor de R$${valorTotal}`;
  }

  exibirCarrinho() {
    return carrinhoComCompras.map((item) => ({
      nome: item.nome,
      quantidade: item.estoque,
      precoUnitario: item.preco,
      subtotal: item.preco * item.estoque,
    }));
  }
}

const produtos = [
  new Produto("Arroz", 10.5, 50),
  new Produto("Feijão", 8.2, 30),
  new Produto("Macarrão", 5.0, 40),
  new Produto("Óleo de Soja", 7.8, 20),
  new Produto("Açúcar", 4.5, 60),
  new Produto("Café", 12.0, 25),
  new Produto("Leite", 3.5, 45),
  new Produto("Tomate", 2.0, 55),
  new Produto("Banana", 1.8, 75),
  new Produto("Sabonete", 1.2, 100),
];
const carrinhoComCompras = [];
const carrinho = new Carrinho();

// adicionar produto
console.log(carrinho.adicionarProduto("Arroz", 2));
console.log(carrinho.adicionarProduto("Macarrão", 5));
console.log(carrinho.adicionarProduto("Café", 4));
console.log(carrinhoComCompras);

// calcular valor total
console.log(carrinho.calcularValorTotal());

// exibir carrinho
console.log(carrinho.exibirCarrinho());

// desafio 3 - sistema bancario
class ContaBancaria {
  constructor(numeroConta, titular, saldoInicial) {
    this.numeroConta = numeroConta;
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;

    return `adicionado R$${valor} na conta de ${this.titular}
    saldo disponivel: R$${this.saldo}`;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor;

      return `R$${valor} sacado da conta de ${this.titular}
      saldo disponivel: R$${this.saldo}`;
    }

    return `essa conta não possui R$${valor} de saldo disponivel`;
  }

  consultarSaldo() {
    return `Seja bem vindo ao SeuBanco, ${this.titular}
    Numero da conta: ${this.numeroConta}
    Titular da conta: ${this.titular}
    Saldo disponivel: R$${this.saldo}`;
  }
}

const contaAlice = new ContaBancaria("001", "Alice", 1500.0);
const contaBob = new ContaBancaria("002", "Bob", 2500.5);
const contaCharlie = new ContaBancaria("003", "Charlie", 1200.75);
const contaDavid = new ContaBancaria("004", "David", 3000.2);
const contaEva = new ContaBancaria("005", "Eva", 1800.9);
const contaFrank = new ContaBancaria("006", "Frank", 2200.3);
const contaGrace = new ContaBancaria("007", "Grace", 3500.6);
const contaHank = new ContaBancaria("008", "Hank", 2800.4);
const contaIvy = new ContaBancaria("009", "Ivy", 2000.15);
const contaJack = new ContaBancaria("010", "Jack", 3200.8);

// depositar
console.log(contaAlice.depositar(500.0));

// sacar
console.log(contaAlice.sacar(500.0));

// ver saldo
console.log(contaAlice.consultarSaldo());

// desafio 4 - sistema de gerenciamento de funcionarios
class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  calcularAumento(nome, percentual) {
    for (let i = 0; i < funcionarios.length; i++) {
      if (nome === funcionarios[i].nome) {
        funcionarios[i].salario =
          (percentual / 100) * funcionarios[i].salario +
          funcionarios[i].salario;
        return `O novo salario de ${funcionarios[i].nome} é de ${funcionarios[i].salario}`;
      }
    }
    return `Esse funcionario não trabalha aqui`;
  }

  exibirInformacoes(nome) {
    for (let i = 0; i < funcionarios.length; i++) {
      if (nome === funcionarios[i].nome) {
        return `
        Nome: ${funcionarios[i].nome}
        Função: ${funcionarios[i].cargo}
        Salário: ${funcionarios[i].salario}`;
      }
    }
    return `Esse funcionario não trabalha aqui`;
  }
}

const funcionarios = [
  new Funcionario("Alice", "Caixa", 2500.0),
  new Funcionario("Bob", "Repositor", 2000.5),
  new Funcionario("Charlie", "Gerente", 4000.75),
  new Funcionario("David", "Atendente", 1800.2),
  new Funcionario("Eva", "Caixa", 2600.0),
  new Funcionario("Frank", "Repositor", 2100.5),
  new Funcionario("Grace", "Gerente", 4200.75),
  new Funcionario("Hank", "Atendente", 1900.2),
  new Funcionario("Ivy", "Caixa", 2700.0),
  new Funcionario("Jack", "Repositor", 2200.5),
];
const funcionario = new Funcionario();

console.log(funcionarios);

// aumentar salario de cargo
console.log(funcionario.calcularAumento("Alice", 10));
console.log(funcionarios[0]);

// exibir informações
console.log(funcionario.exibirInformacoes("Bob"));

// sistema bancario
class SistemaBancario {
  constructor(numeroConta, titular, saldo) {
    this.numeroConta = numeroConta
    this.titular = titular
    this.saldo = saldo
  }

}
class ContaCorrente extends SistemaBancario {
  constructor(numeroConta, titular, saldo) {
    this.numeroConta = numeroConta
    this.titular = titular
    this.saldo = saldo
  }
}
class ContaPoupança extends SistemaBancario {
  constructor(numeroConta, titular, saldo) {
    this.numeroConta = numeroConta
    this.titular = titular
    this.saldo = saldo
  }
}

const Joelson = new 