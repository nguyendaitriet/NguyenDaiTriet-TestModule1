class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName) {
        this.name = newName;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return `Name: ${this.name}, weight: ${this.weight}`
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal("Goat",70.2);
objAnimal2.setName("Mouse");
