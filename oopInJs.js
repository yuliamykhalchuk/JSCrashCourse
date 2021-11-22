function Animal(name, color, age, amountOfLeg) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.amountOfLeg = amountOfLeg;
    this.toString = () =>
        console.log("This animal is" + " " + Object.getPrototypeOf(this).constructor.name);
    this.sound = () =>
            console.log('I like my voice.');
    this.move = () =>
            console.log(this.name + " is ...");
}

class Cat extends Animal {
    constructor(name, color, age, amountOfLeg, domesticAnimal) {
        super(name, color, age, amountOfLeg);
        this.domesticAnimal = domesticAnimal;
        this.sound = () =>
            console.log('Meow!');
        this.move = () =>
            console.log(this.name + " is moving slowly");

    }
    getColor() {
        return this.color;
    }
}
class Tiger extends Cat {
    constructor(name, color, age, amountOfLeg, domesticAnimal) {
        super(name, color, age, amountOfLeg, domesticAnimal);
        this.sound = () =>
            console.log('Growl-growl!');
        this.move = () =>
            console.log(this.name + " is running quiсkly");
    }
}
class Wolf extends Animal {
    constructor(name, color, age, amountOfLeg) {
        super(name, color, age, amountOfLeg);
        this.sound = () =>
            console.log('Howl!!!');
        this.move = () =>
            console.log(this.name + " isn't lazy animal and likes race ");
    }
}
class Dog extends Wolf {
    constructor(name, color, age, domesticAnimal, kindOfDog) {
        super(name, color, age, domesticAnimal);
        this.kindOfDog = kindOfDog;
        this.sound = () =>
            console.log('Woof, woof, woof.');
        this.move = () =>
            console.log(this.name + " is running after a cat");
    }
}
class Bird extends Animal {
    constructor(name, color, age,  amountOfLeg, isFriendly) {
        super(name, color, age, amountOfLeg);
        this.isFriendly = isFriendly;
        this.sound = () =>
            console.log('Chirp-chirp');
        this.move = () =>
            console.log(this.name + " is flying");

    }
}
const Chiko = new Cat('Chiko', 'grey', 3, 4, true);
const Lili = new Tiger('Lili', 'red-white', 3, 4, false);
const Black = new Wolf('Black', 'grey', 15, false);
const Oscar = new Dog('Oscar', 'black', 9, true, 'pitbull');
const Alen = new Bird('Alen', 'white-blue', 1, 2, true);

console.log(Chiko.getColor());
Chiko.move();
Chiko.toString();
Lili.toString();
console.log(Lili.domesticAnimal);
Lili.move();
Black.sound();
console.log(Oscar.kindOfDog);
Oscar.move();
console.log(Alen.color, Alen.isFriendly);
Alen.sound();



