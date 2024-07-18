"use strict";
class Homem {
}
const luis = new Homem();
luis.name = "Luis Felipe";
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const luis2 = new NewUser("luis", 22);
class Fusca {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Fusca("fusca");
fusca.name = "fusca turbo";
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const exterminadorDoFuturo = new KillerMachine("exterminador do futuro", 4);
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('hey, stranger');
    }
}
const hobbit = new Dwarf("hobbit");
class Caminhao {
    constructor(modelo, hp) {
        this.modelo = modelo;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.modelo}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Caminhao("Volvo", 400);
class Algo {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const luisFelipe = new Algo("luis felipe", "santos narciso");
class Maps {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com sucesso");
    }
    get getMaps() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const mapa = new Maps();
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("hello world");
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}
const meuObjeto = new Nova();
class V {
    constructor() {
        this.x = 10;
    }
}
class P extends V {
}
const vInstance = new V();
const pInstance = new P();
class Protegida {
    constructor() {
        this.x = 20;
    }
    protectedMethod() {
        console.log('esse é um método protected');
    }
}
class Sub extends Protegida {
    showX() {
        console.log('x:' + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const subInstance = new Sub();
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const classePrivada = new PrivateClass;
class StaticMembers {
    static staticMethod() {
        console.log('esse é um método estático');
    }
}
StaticMembers.prop = 'teste static';
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'fita');
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `a quantidade total é: ${this.qty}`;
    }
    get showPrice() {
        return `o preço é: ${this.price}`;
    }
}
const produto = new ParametersProperties('camisa', 20, 19.99);
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('felipe');
class AbstractClass {
}
class AbstractExemplo extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`o nome é ${this.name}`);
    }
}
const newAbstract = new AbstractExemplo('felipe');
