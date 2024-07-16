"use strict";
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log('impossivel realizar a soma!');
    }
}
function exemplo(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("por favor, defina uma operação");
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const felipe = new SuperUser("Felipe");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}! Deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}`);
    }
}
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const piroca = new Dog('seu piroca');
const xerequinha = new Dog('xerequinha', 'vira-lata');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('o cachorro não tem raça definida');
    }
}
