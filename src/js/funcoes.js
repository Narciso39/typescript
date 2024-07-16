"use strict";
function semRetorno() {
    console.log('essa função não tem retorno');
}
function greeting(name) {
    return `olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('preparando a função');
    const greet = f(userName);
    console.log(greet);
}
function firstElement(arr) {
    return arr[0];
}
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: 'luis felipe' }, { age: 21, job: 'programador' });
function biggestNumber(a, b) {
    let biggest1 = a;
    let biggest2 = b;
    if (+biggest1 > +biggest2) {
        return biggest1;
    }
    else {
        return biggest2;
    }
}
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá, ${greet} ${name}! Tudo bem?`;
    }
    else {
        return `Olá, ${name}! Tudo bem?`;
    }
}
function somaDefault(n1, n2) {
    if (!n2) {
        n2 = 10;
    }
    return n1 + n2;
}
function daSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x eh um numero");
    }
    else if (typeof x === "string") {
        console.log("x eh uma string");
    }
    else if (typeof x === "boolean") {
        console.log("x eh um booleano");
    }
}
function showErrorMessage(msg) {
    throw new Error(msg);
}
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "camisa", price: 49.99 };
