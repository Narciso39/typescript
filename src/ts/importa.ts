// importação

import importGreet from "./greet.js";

importGreet();

// import variavel

import { x } from "./variavel.js"

console.log(x);


// multiplas importações

import {a, b, myFunction} from './multilplaImporta.js';

console.log(a);
console.log(b);

myFunction();



// alias para importação

import { someName as name } from "./alias.js";

console.log(name);



// importando todos os dados de um arquivo


import * as myNumbers from './numbers.js';

console.log(myNumbers);

const nx = myNumbers.n1;
console.log(nx);

// importando tipos ou interfaces
// importa que nem variaveis 

import { Human } from "./myType.js";

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
}

const joao = new User('joao', 15);

console.log(joao);