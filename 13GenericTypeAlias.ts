type Occupant ={
    name:string;
    age:number;
}
 
class Room <T extends Occupant>{
   
    occupants :T[];
 
    constructor(){
        this.occupants=[];
    }
    addOccupant(occupant : T):void{
        this.occupants.push(occupant);
    }
    getOccupants():T[]{
        return this.occupants;
    }
}
 
let room1=new Room<Occupant>(); // this os a room with generic occupant type
let room2=new Room<Occupant>(); // this os a room with generic occupant type
 
room1.addOccupant({name:'Tara',age:24}); //adding 1 occupant
room1.addOccupant({name:'Alam',age:23}); //adding another occupant
 
room2.addOccupant({name:'Aman',age:21}); //adding 1 occupant
room2.addOccupant({name:'Saif',age:22}); //adding 1 occupant
 
// console.log(`Occupants in Room 1 : ${room1.getOccupants()}`)
console.log(room1.getOccupants());
console.log(room2.getOccupants());