class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    descrever() {
        console.log(`Este animal se chama ${this.name} e tem ${this.age} anos.`);
    }
}

class Gato extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    miar() {
        console.log("Miau");
    }
}

const gato = new Gato("Gato", 2, "Marrom");
const cachorro = new Animal("Cachorro", 8);

gato.descrever();     
gato.miar();
cachorro.descrever();            