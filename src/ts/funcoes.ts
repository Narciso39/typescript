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

