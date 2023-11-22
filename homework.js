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
const gus = new Hamster('Timmy', 'Gus', '')
//Gus has been created
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
            console.log(`${this.name} is ${this.age} years old`)
        }
        getWeight(){
            console.log(`${this.name} is ${this.weight} lbs`)
        }
        greeting(){
            console.log(`Greetings I'm ${this.name}! It's nice to meet you!`)
        }
        feeling(){
            console.log(`How are you feeling, ${this.name}?  \n${this.name}: I'm feeling ${this.mood}...`)
        }
        money(){
            console.log(`Here is ${this.name}'s bank account. \n${this.name} has ${this.bankAcount} dollars`)
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
const timmy = new Person('Timmy')
timmy.greeting()
for (let i=0; i<5; i++){
    timmy.ageUp()
}
timmy.getAge()//Timmy is 5 yrs old
timmy.feeling()//Timmy is -5 mood or sad
for(let i=0; i < 5; i++){
    timmy.eat()
}
timmy.getWeight()//Timmy is 10lbs
timmy.feeling()//Timmy is neutral or 0
for (let i = 0; i < 4; i++){
    timmy.ageUp()
}
timmy.getAge()//Timmy is 9 yrs old
timmy.money()// Timmy has 90 bucks