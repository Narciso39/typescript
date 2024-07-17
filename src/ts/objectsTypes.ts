// de tipo para interface

interface Automovel {
    nome: string
    ano: number
    preco: number
    disponivel: boolean
}


function loja(veiculo: Automovel) {
    console.log(`Você está interessado no ${veiculo.nome}, ele é do ano ${veiculo.ano} e custa ${veiculo.preco}`);
    if (veiculo.disponivel) {
        console.log('Disponível para compra');
    } else {
        console.log('Não está disponível para compra');
    }
}

const carro: Automovel = {
    nome: 'hb20',
    ano: 2017,
    preco: 80.000,
    disponivel: true
};

// loja(carro);

// propriedades opcionais na interface

interface Usuario {
    email: string,
    role?: string,
    password: string | number
}

function showUser(user: Usuario) { 
    console.log(`Email: ${user.email}`);
    if (user.role) {
        console.log(`Função: ${user.role}`);
    }
    console.log(`Senha: ${typeof user.password === "string"? user.password : 'Senha é um número'}`);
}


const user: Usuario = {
    email: 'teste@email.com',
    password: "senha@@78190"
};

//showUser(user);


// propriedade readonly - valor constante

interface Car {
    brand: string,
    readonly model: string,
    year: number
}

const myCar: Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2020
};

// myCar.model = 'Fiesta'; // erro, pois o model é readonly

// index signature - pode adicionar mais valores na interface sem precisar declarar no inicio

interface Coordenadas {
    [index: string]: number
}

let localizacao: Coordenadas = {
    x: 10, 
    y: 20,
    z: 30
};

// localizacao['w'] = 40; // possível, pois o index é genérico

// extending types

interface Human {
    name: string
    age: number
}

interface SupeHuman extends Human {
    superpowers: string[]
}

const heroi: Human = {
    name: 'Batman',
    age: 45
}

// console.log(heroi);
 

const jhonWick: SupeHuman = {
    name: 'Jhon wick',
    age: 50,
    superpowers: ['terno', 'arma', 'oculos']
}

// console.log(jhonWick);



// intersection types

interface Character {
    name: string
    number: number
}

interface Gun {
    typer: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const sdEv: HumanWithGun = {
    name: 'Narciso',
    number: 339,
    typer: 'fuzil',
    caliber: 762
}

// console.log(sdEv);

// ReadOnlyArray -- sem modificação direto

const myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana'];

myArray.forEach((item) => {
   // console.log(`fruta: ${item}`);
});



// tuplas arrays a quantidade de itens não pode ser modificada

type fiveNumber = [number, number, number, number, number]

const myNumberArray: fiveNumber = [1, 2, 3, 4, 5];

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['luis', 40];



// tupla com readonly (não pode ser modificada)


function showNumber(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

// showNumber([1, 2]);