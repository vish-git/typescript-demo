//class
var People = /** @class */ (function () {
    function People(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return People;
}());
function hello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new People("Jane", "M.", "User");
document.body.innerHTML = hello(user);
