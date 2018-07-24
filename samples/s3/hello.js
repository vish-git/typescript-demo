//interfaces
function hello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "ra" };
document.body.innerHTML = hello(user);
