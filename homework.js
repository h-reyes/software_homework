class Hamster{
    constructor(owner, name, price){
    this.owner = owner;
    this.name = name;
    this.price = 15;
}
    wheelRun() {
        console.log(`Squeak Squeak`)
    }
    eatFood(){
        console.log(`nibble nibble`)
    }
    getPrice(){
        console.log(`return the ${this.price}`)
    }
}

const hamster= new Hamster ('Mishelle' , 'Chonky')
console.log(hamster)
//hamster.price = 7
//console.log(hamster)

//Hamster {owner: 'Mishelle', name: 'Chonky', price: 15}