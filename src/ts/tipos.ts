// tipos primitivos
// number, string e boolean

// ex de number
// const numero: number = 10;

// console.log(typeof numero);

// ex de string 

const primeiroNome: string = 'Luis Felipe';

// console.log(primeiroNome);

const sobrenome: string = 'Santos Narciso';

let nomeCompleto = primeiroNome + ' ' + sobrenome;

// console.log(nomeCompleto);

// ex boolean

let a: boolean = false;

a = true;

// console.log(a);

// inference e annotation

let ann: string = 'teste';

// ann = 12;

let inf = 'teste';

// inf = 12;

// console.log('testando o relogio akakak');




// avançando em arrays
// tipos em array é const array: string[] = [x, x , x];
//string
let arr: string[] = ['nome', 'tal coisa', 'etc'];
//number
let arr2: number[] = [1, 2, 3, 4, 5, 6, 7];
// bolean
let arr3: boolean[] = [true, false];
// todos = any 
let arr4: any[] = [1, 2, 'nome', true, false];


// outra sintaxe de array

//let num: Array<number> = [100, 200];

//num.push(300);
//console.log(num);

// tipos de funções 

function minhaFuncao(a: string, b: string) {
    console.log(a + b);
}

// minhaFuncao(primeiroNome, sobrenome);
// 


function primeiroOi(a: string) {
    return `Olá, ${a}!!`;
}

// console.log(primeiroOi(primeiroNome));

// função anonima

setTimeout(function() {
    const sallary: number = 1000;

    //console.log(sallary);
}, 10);


// tipos de objetos 
// 
// function passCoordinates(coord: {x: number, y: number}) {
    // console.log('x coordinates: ' + coord.x);
    // console.log('y coordinates: ' + coord.y);
// }
// 
//const objCoord = {x: 329, y: 84.2};

// passCoordinates(objCoord);

// proprieadades opcionais

function mostrarNumeros(a: number, b:number, c?: number) {
    console.log(a);
    console.log(b);
    console.log(b);
}

// mostrarNumeros(1, 2);

// melhor forma de validar uma propriedade opcional

function advancedGreeting(firstName: string, lastName?: string) {

    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bem?`;
    } else {
        return `Olá, ${firstName}! Tudo bem?`;
    }
}

// console.log(advancedGreeting(primeiroNome));
// 
// console.log(advancedGreeting(primeiroNome, sobrenome));


// union types - mais indicado que o any, usa o | (travessao) para juntar tipos de dados

function showBalance(balance: number | string) {
    console.log(`O saldo da conta é R$${balance}`);
}

// showBalance(1000);
// showBalance('2000');

function showUserRole(role: boolean | string) {

    if (typeof role === "boolean") {
        return 'usuario não aprovado';
    } else {
        return `A função do usuário é: ${role}`;
    }
}

// console.log(showUserRole(false));
// console.log(showUserRole('admin'));


// type alias

type ID = string | number;

function showId(id: ID) {
    console.log(`meu id é ${id}`);
}

//showId('1');



// interfaces -- uma nova maneira de nomear um tipo de objeto 

interface Point {
    x: number
    y: number
    z: number
}
 

function showCoords(obj: Point) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}

let coordenada: Point = {
    x: 10,
    y: 10,
    z: 10
}

// showCoords(coordenada);

// alias vs interfaces

interface Person {
    name: string
}

interface Person {
    age: number
}

// vs

type  Persontype = {
    name: string
}

// da erro, pois nao pode ser modificada ao longo do escopo

// type  Persontype = {
//     name: string
// }

// literal types

let teste: 'testando';
// só irá aceitar o testando
//teste = 'oi';

function showDirection(d: 'left' | 'right' ) {
    return d;
}

// Non-null assertion operator = sinal !

const paragrafo = document.getElementById("paragrafo");

// console.log(paragrafo!.innerText); 

// bigint

let n: bigint;

n = 100n;

// console.log(typeof n)

// symbol cria uma referencia unica para o valor de uma variavel

let symbolA: symbol = Symbol('a');
let symbolB: symbol = Symbol('a');

// console.log(symbolA == symbolB);
// console.log(symbolA === symbolB);
