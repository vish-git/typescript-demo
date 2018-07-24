//interfaces

interface Person {
    firstName: string;
    lastName: string;
}

function hello(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "ra" };

document.body.innerHTML = hello(user);