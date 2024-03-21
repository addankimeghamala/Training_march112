var Student = /** @class */ (function () {
    // constructor
    function Student(name, age, address, course) {
        this.Studname = name;
        this.Studage = age;
        this.Studaddress = address;
        this.Course = course;
        console.log('Constructor method is always invoked');
    }
    Student.prototype.Greeting = function () {
        console.log("Hello ".concat(this.Studname, ", You have successfully enrolled in ").concat(this.Course));
    };
    return Student;
}());
var student1 = new Student('Kaif', 21, 'Aligarh', 'Typescript');
console.log(student1);
console.log("Students name : ".concat(student1.Studname));
student1.Greeting();
var student2 = new Student('Alam', 24, 'Banglore', 'Typescript');
console.log(student2);
console.log("Students name : ".concat(student2.Studname));
student2.Greeting();
var student3 = new Student('Vai', 20, 'Hyd', 'Typescript');
console.log(student3);
console.log("Students name : ".concat(student3.Studname));
student3.Greeting();
