const arrow = (a, b) => a + b;

// console.log(arrow(15, 40));

// filter

const arr = [1, 2, 3, 4 , 5, 6];

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n;
    }
});

// console.log(highNumbers);

const users = [
    {name: 'luis1', disponivel: false},
    {name: 'luis2', disponivel: true},
    {name: 'luis3', disponivel: false},
    {name: 'luis4', disponivel: true},
    {name: 'luis5', disponivel: false},
    {name: 'luis6', disponivel: true}
];

const usersDispo = users.filter((d) => {
    if(d.disponivel === true) {
        return d; 
    }
});

// console.log(usersDispo);


// map


const produtos = [
    {name: 'camisa', tamanho: 'g', preco: 10.99, categoria: 'roupas'},
    {name: 'calça', tamanho: '48', preco: 50, categoria: 'roupas'},
    {name: 'tenis', tamanho: '41/42', preco: 120.99, categoria: 'tenis'},
    {name: 'boné', tamanho: '35', preco: 30.99, categoria: 'acessorios'}
];


produtos.map((produto) => {
    if (produto.categoria === "roupas") {
        produtos.onSale = true;
    }
});

// console.log(produtos);

// destructuring 

const frutas = [ 'maçã', 'banana', 'mamão'];

const [f1, f2, f3] = frutas;

// console.log(f1, f2);

const frutasDetalhes = {
    nome: 'maçã',
    cor: 'vermelha',
    preco: 6.90
};
 
const {nome, cor, preco} = frutasDetalhes;


// console.log(`eu gosto muito de ${nome}, ela tem que está bem ${cor}, mas custa R$${preco}`);


// spread operator == unir varios arrays

const a1 = [1, 2, 3];

const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);


// com objetos

const carName = {nome: 'corolla'};
const carBrand = {marca: 'toyota'};
const otherInfos = {km: 1000, price: 40000};

const carAll = {...carName, ...carBrand, ...otherInfos};

console.log(carAll);


// classes 

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    procuctWithDiscount(discount) {
        return this.price * ((100 - discount)/ 100);
    }
}

const shirt = new Product('Camisa gola v', 20);

console.log(shirt.procuctWithDiscount(20));


class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:');
        this.colors.forEach(color => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes('bone da lacoste', 29.99, ['preto', 'branco', 'cinza']);

console.log(hat.name);

console.log(hat.procuctWithDiscount(30));

console.log(hat.showColors());