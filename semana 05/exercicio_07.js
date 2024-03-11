class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    descrever() {
        console.log(`Este animal se chama ${this.name} e tem ${this.age} anos.`);
    }
}

const gato = new Gato("Gato", 7);
const cachorro = new Animal("Cachorro", 11);

gato.descrever();
cachorro.descrever();
