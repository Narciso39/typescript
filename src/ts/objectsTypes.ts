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
