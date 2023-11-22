class Hamster {
    constructor(name) {
        this.owner = '';
        this.name1 = name;
        this.price = 15;
    }
    wheelRun() {
        console.log(`Squeak Squeak`)
    }
    eatFood() {
        console.log(`nibble nibble`)
    }
    getPrice() {
        console.log(`${this.name1} costs ${this.price} dollars`)
    }
    getCost(){
        return this.price
    }
}

const hamster = new Hamster('Chonky')
hamster.owner = 'Mishelle'
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
            this.bankAcount -= hamster.getCost()
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

const gus = new Hamster('Gus')
//Gus has been created
gus.owner = 'Timmy'
timmy.buyHamster(gus)
timmy.money()
timmy.feeling()
for(let i = 0; i < 6; i++){
    timmy.ageUp()
}
timmy.getAge()
timmy.money()
timmy.feeling()
for(let i = 0; i < 2; i++){
    timmy.eat()
}
timmy.feeling()
timmy.getWeight()
for(let i= 0; i < 2; i++){
    timmy.excercise()
}
timmy.getWeight()
//Timmy's Story


console.log(`-------------------------- Dinner Factory Assignment---------------------`)
class Dinner {
    constructor(menui){
        this.item = menui;
        this.price1 = '';
        this.class = '';
    }
    order(){
        return this.price1
    }
    itemDes(){
        console.log(`${this.item} is $${this.price1}`)
    }
    dishClass(){
        console.log(`This ${this.item} is known as ${this.class}`)
    }
    
}
const hamburger= new Dinner ('Hamburger')
hamburger.price1 = '5.99'
hamburger.class = 'entree'

hamburger.order()
hamburger.itemDes()
hamburger.dishClass()

const frenchF = new Dinner ('French Fries')
frenchF.price1 = '2.99'
frenchF.class = 'appetizer'

const brownie = new Dinner ('Brownie')
brownie.price1 = '3'
brownie.class = 'dessert'

class Chef{
    constructor(name){
        this.name = name;
        this.bankAcount = 0;
        this.tired = 0;
        this.order = 0;
        this.menuis = []
    }
    getName(){
        console.log(`${this.name}`)
    }
    getMood(){
        console.log(`How are you feeling, Chef ${this.name}?  \n${this.name}: I'm feeling ${this.tired}...`)
    }
    money(){
        console.log(`${this.name} has ${this.bankAcount} dollars`)
    }
    break(){
        this.tired++
    }
    orderUp(menui){
        this.menuis.push(menui)
        this.order++
        this.bankAcount+= menui.price1
        this.tired--
    }
}

const carlos = new Chef('Carlos')
carlos.getName()
carlos.orderUp(brownie)
carlos.getMood()
carlos.money()