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
