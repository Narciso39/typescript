"use strict";
function showData(arg) {
    return `o dado é: ${arg}`;
}
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'porta', cor: 'prata' };
const meuCarro = {
    name: 'hb20',
    wheels: 4,
    engine: 2.0,
    color: 'branco'
};
const myPen = {
    name: 'caneta',
    wheels: false,
    engine: false,
    color: 'azul'
};
function getSomeKey(obj, key) {
    return `a chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '3 TB',
    ram: '32gb',
    id: 10
};
function mostrarNome(obj, key) {
    return `${obj[key]}`;
}
const eu = {
    name: 'luis felipe',
    age: 21,
    temCnh: false
};
const userName = 'felipe';
const userName2 = 'matheus';
const carreta = {
    km: 10000,
    kg: 100000,
    description: 'carga pesada'
};
function showKm(km) {
    console.log(`o veículo tem a km de: ${km}`);
}
const someVar = 10;
const testing = 'some text';
