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


