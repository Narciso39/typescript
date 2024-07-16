"use strict";
function loja(veiculo) {
    console.log(`Você está interessado no ${veiculo.nome}, ele é do ano ${veiculo.ano} e custa ${veiculo.preco}`);
    if (veiculo.disponivel) {
        console.log('Disponível para compra');
    }
    else {
        console.log('Não está disponível para compra');
    }
}
const carro = {
    nome: 'hb20',
    ano: 2017,
    preco: 80.000,
    disponivel: true
};
function showUser(user) {
    console.log(`Email: ${user.email}`);
    if (user.role) {
        console.log(`Função: ${user.role}`);
    }
    console.log(`Senha: ${typeof user.password === "string" ? user.password : 'Senha é um número'}`);
}
const user = {
    email: 'teste@email.com',
    password: "senha@@78190"
};
const myCar = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2020
};
let localizacao = {
    x: 10,
    y: 20,
    z: 30
};
