// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name //the underscore helps with abstraction and prevents others from making direct changes to this value 
        this._role = role//The underscore is a convention that says hey dont touch this property or change the value directly. Its a convention that indicates its a private property
    }
    get name(){ //the getter helps with abstraction by preventing others from making direct change
        return this._name
    }

    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hi, my name is ${this._name}`)
    }
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name,role)//super represent inheritance to stop us from repeating code and it will inherit the name and role from the contractor class eg. this._name = name
        this._tech = tech
    }
    get tech(){
       return this._tech
    }
    sayHello(){
        console.log(`Hi, my name is ${super.name}`)
    }
}

class Back extends Contractor{
    constructor(name,role,tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hi, my name is ${super.name}`)
    }
}

let rob = new Contractor("Robert","QA")
let gabby = new Front("Gabby","Front-End","CSS and HTML")
let hallie = new Back("Hals","Back-End","SQL_Server")

let team =[rob, gabby, hallie]

for(person of team){
     person.sayHello()
}














// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
