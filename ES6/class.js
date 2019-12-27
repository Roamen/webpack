// class Person {
//     constructor(name, age) {
//         this._name = name
//         this.age = age
//     }
//     say() {
//         console.log('Hello, My name is ' + this.name)
//     }
//     get name() {
//         // return this.name // 这样会形成死循环
//         return this._name
//     }
// }

// let person = new Person('游荡de蝌蚪', 18)

// console.log(person.name)
// console.log(person.age)
// console.log(person.say())

// console.log(Foo) // 报错 不能再声明之前使用
// class Foo {}

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     say() {
//         console.log(`My name is${this.name}`)
//     }

//     static hello() {
//         console.log('Hello World')
//     }
// }

// let person = new Person('游荡de蝌蚪')

// person.say() // My name is 游荡de蝌蚪
// // person.hello() // 报错 person.hello is not a function

// // 直接通过类来调用
// Person.hello() // Hello World

class Person {
    name = '游荡de蝌蚪'
    static say() {
        console.log(this.name)
    }
}

class Bar extends Person{
    constructor() {
        super(this)
    }
}

Bar.say()