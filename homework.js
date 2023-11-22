class Hamster {
    constructor( owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log(`Squeak Squeak`)
    }
    eatFood() {
        console.log(`nibble nibble`)
    }
    getPrice() {
        console.log(`return the ${this.price}`)
    }
}

const hamster = new Hamster('Mishelle', 'Chonky', '')
console.log(hamster)
//hamster.price = 7
//console.log(hamster)
//Hamster {owner: 'Mishelle', name: 'Chonky', price: 15}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAcount = 0;
    }
//methods
        getName(){
            console.log(this.name)
        }
        getAge(){
            console.log(this.age)
        }
        getWeight(){
            console.log(this.weight)
        }
        greeting(){
            console.log(`Greetings I'm ${this.name}`)
        }
        //increment weight, increment mood eat()
        //
        eat(){
            this.weight++
            this.mood++
        }
        //decrease of weight
        excercise(){
            this.weight--
        }
        ageUp(){
            this.age++
            this.height++
            this.weight++
            this.mood--
            this.bankAcount+=10
        }
        buyHamster(hamster){
            this.hamsters.push(hamster)
            this.mood+=10
            this.bankAcount-=hamster.getPrice()
        }
}
const Timmy = new Person('Timmy')
Timmy.greeting()