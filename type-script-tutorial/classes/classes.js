// Create a class
var Person = /** @class */ (function () {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    // Creating a method which is very helpfull to use to different objects and use its properties
    Person.prototype.sayHello = function () {
        var output = this.firstName + ' says hello...';
        console.log(output);
        return output;
    };
    return Person;
}());
// Instantiate the class
var john = new Person('John', 'Doe', 30);
// console.log(john);
// console.log(john.firstName);
// Calling the method sayHello() from john object
john.sayHello();
// Create another object
var kevin = new Person('Kevin', 'Hart', 40);
// console.log(kevin);
// Calling the method sayHello() from kevin object
kevin.sayHello();
