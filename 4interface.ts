//interface describes the shape of an object
interface studentDataType{
    name : string,
    age : number,
    course ? : string
   
}
 
// extends - inherit the properties of the exisiting interface
interface SectionAdataType extends studentDataType{
    address : string,
    hobbies : any,
    info : ()=>void
}
 
let student : studentDataType = {
name : 'ABC',
age : 20,
course : 'Javascript'
}
 
let student1 : studentDataType = {
    name : 'DEF',
    age : 21,
    course : 'Javascript'
    }
 
let student2 : studentDataType = {
    name : 'GHI',
    age : 21,
    course : 'Javascript'
        }
 
let student3 : SectionAdataType = {
        name : 'XYZ',
        age : 21,
       course : 'Javascript',
        address : 'Mumbai',
        hobbies :['Reading','Dancing'],
        info : function() {
            console.log('This is the information...')
        }
 
     }
 
    student3.info()
    console.log(student3.name);