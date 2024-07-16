// funções que não retornam nada;
// void 

function semRetorno():void {
    console.log('essa função não tem retorno');
}

// semRetorno();

// callback como argumento

function greeting(name: string) {
    return `olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName:string) {
    console.log('preparando a função');

    const greet = f(userName);
    
    console.log(greet);
}


// preGreeting(greeting, 'felipe');


// generic functions 

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

// console.log(firstElement([1, 2, 3, 4, true]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: 'luis felipe'}, {age: 21, job: 'programador'});

// console.log(newObject);


// constraints 


function biggestNumber<T, U extends number | string>(a: T, b: U){
    let biggest1 = a;
    let biggest2 = b;

    if(+biggest1 > +biggest2) {
        return biggest1;
    } else {
        return biggest2;
    }

    
}

// console.log(biggestNumber(10, '11'));


// especificar tipo de argumento


function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

// console.log([1, 2, 3], [4, 5, 6]);
// se forem dados diferentes tem que ser assim:
// console.log(mergeArrays<number | string>([1, 2, 3], ['quatro', 'cinco'])); // tem que passar o nome da função<tipo de dados> 


// parametros opcionais

function modernGreeting(name: string, greet?: string) {

    if (greet) {
        return `Olá, ${greet} ${name}! Tudo bem?`;
    } else {
        return `Olá, ${name}! Tudo bem?`;
    }
}

// console.log(modernGreeting('Narciso', 'tenente'));

// parametro default

function somaDefault(n1: number, n2?: number): number {

    if(!n2) {
        n2 = 10;
    }
    return n1 + n2; 
}


// console.log(somaDefault(10));

// tipo unknown
// ele não deixa algo ser executado se não tiver uma validação de tipo

function daSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    } else if (typeof x === "number") {
        console.log("x eh um numero");
    } else if (typeof x === "string") {
        console.log("x eh uma string");
    } else if (typeof x === "boolean") {
        console.log("x eh um booleano");
    }
}

// daSomething("x");

// tipo never

function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

// showErrorMessage("algum erro");

// rest parameters

function sumAll(...n: number[]): number {
    return n.reduce((number, sum) => sum + number);
}

// console.log(sumAll(10, 20, 30, 40, 50));

// destructuring 

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = {name: "camisa", price: 49.99};

// console.log(showProductDetails(shirt));
