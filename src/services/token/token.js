const jwt = require("jsonwebtoken");

const chaveSecreta = "chaveSecreta123451111";

const token = jwt.sign(
    {
        nomeApp: "Pets",
        app: "PetAdoção"
    }, chaveSecreta
)

console.log(token)