const { createHash } = require("crypto");

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criarHash(senha);
  }

  criarHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criarHash(senha)) {
      console.log("Usuário autenticado");
      return true;
    }
    console.log("Usuário ou senha inválidos");
    return false;
  }
}

const usuario = new Usuario("Shane Santiago", "1558");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (usuario.autentica("Shane Santiago", senhaTeste.toString())) {
    console.log("Senha é", senhaTeste);
    break;
  }
}
