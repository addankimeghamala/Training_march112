//function that swaps the position if two elements in an array using generics
 
//[1,2,3,4] , 0-2 => [3,2,1,4]
 
function swap<T>(arr: T[], index1:number, index2 : number):void{
    if(index1 <0 || index1 >=arr.length || index2 <0 || index2 >=arr.length){
        throw new Error('Invalid indices');
    }
 
    const temp = arr[index1];
    arr[index1]= arr[index2];
    arr[index2] = temp;
}
 
let numArr = [1,2,3,4];
swap(numArr, 0,2);
console.log(numArr);

//custom name for a type -> more readable , complex types
type Point = {
    x: number;
    y : number
}
type Coordinates = {
    latitude : number;
    longitude : number;
}
type location = Coordinates & Point;
 
type user = {
    name : string
    age : number
};
 
let admin : user ={
    name : 'Alam',
    age : 24
} ;
 
console.log(admin);
 
 
type ID = string | number;
let amount : ID = 123222;
let data : ID
console.log(amount);

//EVEN numbers
type reduceFunc<T>=(value:T)=>boolean;
 
function filter<T>(arr:T[],filterF :reduceFunc<T>):T[]{
    return arr.filter(filterF)
}
 
let  numbers : number[]=[23,12,133,15,44];
let evenNum=filter(numbers,item=> item%2==0);
console.log(evenNum);
 
// mapping,reduce