"use strict";
const primeiroNome = 'Luis Felipe';
const sobrenome = 'Santos Narciso';
let nomeCompleto = primeiroNome + ' ' + sobrenome;
let a = false;
a = true;
let ann = 'teste';
let inf = 'teste';
let arr = ['nome', 'tal coisa', 'etc'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let arr3 = [true, false];
let arr4 = [1, 2, 'nome', true, false];
function minhaFuncao(a, b) {
    console.log(a + b);
}
function primeiroOi(a) {
    return `Olá, ${a}!!`;
}
setTimeout(function () {
    const sallary = 1000;
}, 10);
function mostrarNumeros(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(b);
}
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bem?`;
    }
    else {
        return `Olá, ${firstName}! Tudo bem?`;
    }
}
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
function showUserRole(role) {
    if (typeof role === "boolean") {
        return 'usuario não aprovado';
    }
    else {
        return `A função do usuário é: ${role}`;
    }
}
function showId(id) {
    console.log(`meu id é ${id}`);
}
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
let coordenada = {
    x: 10,
    y: 10,
    z: 10
};
let teste;
function showDirection(d) {
    return d;
}
const paragrafo = document.getElementById("paragrafo");
let n;
n = 100n;
let symbolA = Symbol('a');
let symbolB = Symbol('a');
