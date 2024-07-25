const createHash = require("crypto").createHash;

const criarHash = (senha) => {
  return createHash("sha256").update(senha).digest("hex");
};
// console.log(criarHash("Uma string qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criarHash(senha);
  }
  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criarHash(senha)) {
      console.log("Usuario autenticado");
      return true;
    }
    console.log("Usuario ou senha inválidos");
    return false;
  }
}
const usuario = new Usuario("Shane Santiago", "123456");


console.log("Usuário", usuario)
// Usuário correto
console.log("Usuário", usuario.autentica("Shane Santiago", "123456"))

// Usuário errado
console.log("Usuário", usuario.autentica("Shane Santiago", "123"))

module.exports = { criarHash }