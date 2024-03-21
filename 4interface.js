var student = {
    name: 'ABC',
    age: 20,
    course: 'Javascript'
};
var student1 = {
    name: 'DEF',
    age: 21,
    course: 'Javascript'
};
var student2 = {
    name: 'GHI',
    age: 21,
    course: 'Javascript'
};
var student3 = {
    name: 'XYZ',
    age: 21,
    course: 'Javascript',
    address: 'Mumbai',
    hobbies: ['Reading', 'Dancing'],
    info: function () {
        console.log('This is the information...');
    }
};
student3.info();
console.log(student3.name);
