// generics = quando uma função pode aceitar mais de um tipo

function showData<T>(arg: T): string {
    return `o dado é: ${arg}`;
}

// console.log(showData(true));


// constraints em generics

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}

const myObj = {name: 'porta', cor: 'prata'};

// console.log(showProductName(myObj));


// interfaces com generics

interface MyObject<T, U, C> {
    name: string
    wheels: T
    engine: U
    color: C
}

type Carro = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const meuCarro: Carro = {
    name: 'hb20',
    wheels: 4,
    engine: 2.0,
    color: 'branco'
};

const myPen: Pen = {
    name: 'caneta',
    wheels: false,
    engine: false,
    color: 'azul'
};


// type parameters 

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `a chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: '3 TB',
    ram: '32gb',
    id: 10
};

// console.log(server, 'id');

// keyof type operator = consegue tipo de objetos e arrays

type Pessoa = {name: string, age: number, temCnh: boolean};

type C = keyof Pessoa

function mostrarNome(obj: Pessoa, key: C): string {
    return `${obj[key]}`;
}

const eu: Pessoa = {
    name: 'luis felipe',
    age: 21,
    temCnh: false
};

// console.log(mostrarNome(eu, 'name'));

// typeof type operator 

const userName: string = 'felipe';

const userName2: typeof userName = 'matheus';


// indexed access type - consigo utilizar o tipo da chave do objeto

type Truck = {
    km: number,
    kg: number,
    description: string
}

type Km = Truck['km']


const carreta: Truck = {
    km: 10000,
    kg: 100000,
    description: 'carga pesada'
};

function showKm(km: Km) {
    console.log(`o veículo tem a km de: ${km}`);
}

// showKm(carreta.km);


// conditional expressions type  -- if ternario


interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}
type myType = B extends A ? number : string 

const someVar: myType = 10;

type myTypeB = Teste extends {showName(): number} ? string : boolean


// template literals types

type TestA = 'text'

type CustomType = `some ${TestA}`

const testing: CustomType = 'some text'; // exemplo correto

// const testingError: CustomType = 'some text 1' // exemplo errado