const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");
const jwt = require('jsonwebtoken');

const criarHashComSalt = (senha) => {
    const salt = randomBytes(16).toString("hex");
    const senhaHasheada = scryptSync(senha, salt, 64).toString("hex");
    return `${salt}:${senhaHasheada}`;
}

class Usuario {
    constructor(email, senha) {
        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }
        this.email = email;
        [this.salt, this.hash] = criarHashComSalt(senha).split(':');
    }

    autentica(email, senha) {
        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios para autenticação");
        }
        if (email === this.email) {
            const testeHash = scryptSync(senha, this.salt, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
            const hashCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashCorrespondem) {
                console.log("Usuário autenticado");
                const token = jwt.sign({ email }, 'seu_segredo_jwt', { expiresIn: '1h' });
                return token;
            }
        }
        console.log("Usuário ou senha inválidos");
        return false;
    }
}

module.exports = { criarHashComSalt, Usuario };
