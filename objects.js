const frs = ['avi', 'aston', 'yurai', 'efrat']

// for (const ddd of frs) {
//     console.log(ddd)
// }

// for( let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let c = 0
// while(c < 10) {
//     console.log(c)
//     c++
// }

// function x(fn, arg) {
//     fn(arg)
// }

// x(x => console.log(x), "Avneros")

// function abc() {
//     console.log(arguments)
// }

// abc(9, 6, 4)

// const a = 9009

const p3 = {
    name: "Avner",
    age: 32,
    friends: ['Itay', 'Efraim', "Sivan", "Haim"],

    sayHello: function () {
        for (const fr of this.friends) {
            console.log(`Hi Im ${this.name} and Im ${this.age} years old, Hello ${fr}`)
        }
    },

    sayHello2: function () {
        this.friends.forEach((fr, index)  => 
            index === this.friends.length - 1 &&
            console.log(fr)
        )
    }
}

// // p1.sayHello2()

function Person(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.isCool = true

    this.sayHello = function () {
        console.log(`Hi Im ${name}`)
    }
}

const p1 = new Person("Enosh", 30, ["Fofi", "Fima", "Fumon"])
const p2 = new Person("Yafit", 23, ["Fofi", "Fima"])

// const  { name, age} = p1

// console.log(age, p1);

// class Person {


//     constructor(_name, _age) {
//         this._name = _name
//         this._age = _age
//     }

//     sayHai() {
//         console.log(`Hi Im ${this.name}`)
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName
//     }
// }

// const p1 = new Person("Dov", "Hulom")
// p1.name = "dasd"


class Animal {

    constructor(name) {
        this.name = name
        this.cool = true
    }

    sound() {
        console.log("...")
    }

    
}

class Cat extends Animal {

    constructor(color) {
        super("Mitsy")
        this.color = color
    }
}

const a = new Cat("white")
a.sound()

console.log(a)



