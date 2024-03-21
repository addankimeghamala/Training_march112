class Student{
    //properties
    Studname : string;
    Studage : number;
    Studaddress : string;
    Course : string;
 
 
// constructor
constructor(name : string, age : number,address:string,course:string){
    this.Studname=name;
    this.Studage=age;
    this.Studaddress=address;
    this.Course=course;
    console.log('Constructor method is always invoked');
 
}
 
Greeting():void{
    console.log(`Hello ${this.Studname}, You have successfully enrolled in ${this.Course}`)
}
}
 
let student1= new Student('Kaif',21,'Aligarh','Typescript');
console.log(student1);
console.log(`Students name : ${student1.Studname}`);
student1.Greeting();
 
let student2= new Student('Alam',24,'Banglore','Typescript');
console.log(student2);
console.log(`Students name : ${student2.Studname}`);
student2.Greeting();
 
let student3= new Student('Vai',20,'Hyd','Typescript');
console.log(student3);
console.log(`Students name : ${student3.Studname}`);
student3.Greeting();

