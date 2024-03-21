var _this = this;
//define the function
function sumOfTwoNumbers(a, b) {
    return "The sum of two numbers ".concat(a, " & ").concat(b, " is ").concat(a + b, ".");
}
//call the function
console.log(sumOfTwoNumbers(453678421, 36478166));
//Function Expression
var result = function (a, b) {
    return a - b;
};
console.log(result(456987, 123456));
//arrow functions
var result1 = function (a, b) { return console.log(a * b); };
result1(789456, 12);
//Hoisting -> arrow functions are not hoisted
//this
Greeting();
function Greeting() {
    console.log('Hello,Have a nice day!');
}
var student3 = {
    name: 'Kaif',
    age: 21,
    course: 'ReactJS',
    address: 'Aligarh',
    hobbies: ['Reading Books ', 'Cycling', 'Dancing'],
    info: function () {
        console.log("***Student Details***\n        Student Name : ".concat(this.name, "\n        Student Course : ").concat(this.course, "\n        "));
    }
};
student3.info();
// console.log(student3.name);
var student4 = {
    name: 'Alam',
    age: 24,
    course: 'Angular',
    address: 'Bangalore',
    hobbies: ['Reading Books ', 'Cycling', 'Singing'],
    info: function () {
        console.log("***Student Details***\n        Student Name : ".concat(_this.name, "\n        Student Course : ").concat(_this.course, "\n        "));
    }
};
student4.info();
