// campos em classe -  propriedades

class Homem {
    name!: string
    age!: number 

}

const luis = new Homem();

// console.log(luis);

luis.name = "Luis Felipe";

// console.log(luis);


// constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const luis2 = new NewUser("luis", 22);

// console.log(luis2);


// campos readonly

class Fusca {
    name 
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Fusca("fusca");

fusca.name = "fusca turbo";

// console.log(fusca);

// fusca.wheels = 5; // erro!




//  herança e super

class Machine {
    name 
    
    constructor(name: string) {
        this.name = name
    }
}


const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const exterminadorDoFuturo = new KillerMachine("exterminador do futuro", 4);

// console.log(exterminadorDoFuturo);



// métodos

class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log('hey, stranger');
    }
}


const hobbit = new Dwarf("hobbit");

// hobbit.greeting();


// this se refere as propriedades da classe

class Caminhao {
    modelo: string
    hp: number

    constructor(modelo: string, hp: number) {
        this.modelo = modelo
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.modelo}, que tem ${this.hp} cavalos de potência`)
    }
}


const volvo = new Caminhao("Volvo", 400);

// volvo.showDetails();


// getters  = retornar a propriedade do objeto, porém pode modificá-las neste retorno = metodo para ler a propriedade


class Algo {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}


const luisFelipe = new Algo("luis felipe", "santos narciso");

// console.log(luisFelipe.name);

// console.log(luisFelipe.fullName);




// os getters leem propriedades, os setters as modificam/atribuem


class Maps {
    x!: number
    y!: number

    set fillx(x: number) {
        if (x === 0) {
            return;
        }

        this.x = x;

        console.log("x inserido com sucesso");
    }

      set filly(y: number) {
        if(y === 0) {
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

// mapa.fillx = 15;
// mapa.filly = 10;


// console.log(mapa.getMaps);


// herança de interfaces = criar metodos que varias classes terão em comum

interface ShowTitle {
    itemTitle(): string
} 

class BlogPost implements ShowTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O título do post é: ${this.title}`;
    }
}

const myPost = new BlogPost("hello world");

// console.log(myPost.itemTitle()); 


// override de metodos = quer usar o mesmo nome na classe filha

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

// meuObjeto.someMethod();


// visibilidade 
// public = pode ser acessado em qualquer lugar
// protected = acessivel somente em subclasses da classe do metodo, para acessar uma propriedade precisamos de um método
// private = apenas a classe que declarou o método pode utilizar


// public

class V {
    public x = 10
}

class P extends V {

}

const vInstance = new V();

const pInstance = new P();

// console.log(pInstance.x);


// protected 

class Protegida {
    protected x = 20

    protected protectedMethod() {
        console.log('esse é um método protected');
    }
}

class Sub extends Protegida {

    showX() {
        console.log('x:' + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const subInstance = new Sub();

// console.log(subInstance.showX());

// subInstance.showProtectedMethod(); //acessando um método protected


// private 

class PrivateClass {
    private name = 'Private'

    showName() {
        return this.name;
    }

    private privateMethod() {
        console.log('método privado');
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const classePrivada = new PrivateClass;

// console.log(classePrivada.showName());

// classePrivada.showPrivateMethod();


// static members = permite acesso a propriedade ou o método sem ter que criar um objeto

class StaticMembers {
    static prop = 'teste static'

    static staticMethod() {
        console.log('esse é um método estático');
    }
}


// console.log(StaticMembers.prop);
// StaticMembers.staticMethod();

// generic class

class Item<T, U> {
    
    first 
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`;
    }
}

const newItem = new Item('caixa', 'fita');

// console.log(newItem);

// console.log(newItem.showFirst);





// parameters properties 

class ParametersProperties {

    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `a quantidade total é: ${this.qty}`;
    }

    get showPrice() {
        return `o preço é: ${this.price}`;
    }
}

const produto = new ParametersProperties('camisa', 20, 19.99);

// console.log(produto.name);
// console.log(produto.showPrice);
// console.log(produto.showQty);


// class expressions


const myClass = class<T> {
    name 

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass('felipe');

// console.log(pessoa);


// abstract class 


abstract class AbstractClass {
    
    abstract showName(): void 
}

class AbstractExemplo extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName(): void {
        console.log(`o nome é ${this.name}`);
    }
}

const newAbstract = new AbstractExemplo('felipe');

// newAbstract.showName();


// relações entre classe
