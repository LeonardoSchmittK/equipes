class Sorteador {
  equipes;
  numeroEquipes;
  pessoas;

  constructor(pessoas, numeroEquipes) {
    this.setPessoas(pessoas);
    this.setNumeroEquipes(numeroEquipes);
    this.sortear();
  }

  sortear() {
    const equipes = [];
    const pessoas = this.getPessoas();
    const quantidadePessoas = pessoas.length;
    const divisor = Math.round(quantidadePessoas / this.getNumeroEquipes());
    const numeroEquipes = this.getNumeroEquipes();
    console.log(divisor);
    let equipe = [];

    function x() {
      let randomN = Math.floor(Math.random() * pessoas.length);
      equipe.push(pessoas[randomN]);
      pessoas.splice(randomN, 1);
      if (pessoas.length % divisor === 0 || pessoas.length === 0) {
        equipes.push(equipe);
        equipe = [];
      }
      if (pessoas.length >= 1) {
        return x();
      } else {
        return equipes;
      }
    }
    this.setEquipes(x());
    return;
  }

  setPessoas(pessoas) {
    this.pessoas = pessoas;
  }

  getPessoas() {
    return this.pessoas;
  }

  setNumeroEquipes(numeroEquipes) {
    this.numeroEquipes = numeroEquipes;
  }

  getNumeroEquipes() {
    return this.numeroEquipes;
  }

  setEquipes(equipes) {
    this.equipes = equipes;
  }

  getEquipes() {
    return this.equipes;
  }

  printEquipes() {
    const equipes = this.getEquipes();

    for (let i = 0; i < equipes.length; ++i) {
      console.log(`Equipe ${i + 1}: ${equipes[i].join(", ")}`);
    }
  }
}

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Samuel",
  "Taylor",
  "Uma",
  "Victor",
  "Wendy",
  "Xavier",
  "Yara",
  "Zane",
  "Anna",
  "Oliveira",
];

const sorteador = new Sorteador(names, 15).printEquipes();
