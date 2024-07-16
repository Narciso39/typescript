// narrowing
// typeof type guard

function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string") {
      console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log('impossivel realizar a soma!');
    }
}

// sum('2', '6');

// sum(1, 2);

// checando se o valor existe 


function exemplo(arr: number[], operation?: string | undefined) {
    if(operation) {

        if(operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total) ;
            console.log(sum);
        } else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("por favor, defina uma operação");
    }
}

// exemplo([1, 2, 4], 'multiply');

// operador instanceof  = orientado a objetos

class User {
    name 
    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}

const jhon = new User("Jhon");
const felipe = new SuperUser("Felipe");

// console.log(jhon);
// console.log(felipe);

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá, ${user.name}! Deseja ver os dados do sistema?`);
    } else if(user instanceof User) {
        console.log(`Olá, ${user.name}`);
    }
}

// userGreeting(felipe);

// Operador in = checar se existe uma propriedade no objeto

class Dog {
    name 
    breed

    constructor(name: string, breed?:string) {
        this.name = name;
        if(breed) {
            this.breed = breed;
        }
    }
}

const piroca = new Dog('seu piroca');

const xerequinha = new Dog('xerequinha', 'vira-lata');

function showDogDetails(dog: Dog) {

    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    } else {
        console.log('o cachorro não tem raça definida');
    }
}

// showDogDetails(piroca);
// showDogDetails(xerequinha);