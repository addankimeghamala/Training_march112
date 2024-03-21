//var

function hello():void{
    var name : string = 'Hello';
    var anotherMsg : string = 'Good Morning!';
    //console.log(msg);
}

//console.log(msg);
//console.log(anotherMsg);

//hello();

//redeclaration

var myName : string = 'Tara';
var myName : string = 'Alam';

console.log(myName); //redeclaration is allowed in var keyword

//reassignment

var score: number =99;
score = 100;

console.log(score); //reassignment is possiable in var

//block scoped keyword
var color = 'blue';
if(color == 'blue'){
    let say = 'This is blue color';
    const msg = 'This is my fav color';
}
//console.log(say); const and let are block scoped keywords

//redirection
let myScore : number =99;
myScore = 100; //reassignment is allowed
console.log(myScore);
//let myScore = 100; //Cannot redeclare block-scoped variable 'myScore'.

const intRate : number = 0.3;
//intRate = 0.5; //reassignment is not allowed
//const intRate = 0.8;
console.log(intRate); //Cannot redeclare block-scoped variable 'intRate'.