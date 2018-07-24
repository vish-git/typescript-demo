//class
class People {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function hello(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new People("Jane", "M.", "User");

document.body.innerHTML = hello(user);