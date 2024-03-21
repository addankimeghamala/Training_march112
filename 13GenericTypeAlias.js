var Room = /** @class */ (function () {
    function Room() {
        this.occupants = [];
    }
    Room.prototype.addOccupant = function (occupant) {
        this.occupants.push(occupant);
    };
    Room.prototype.getOccupants = function () {
        return this.occupants;
    };
    return Room;
}());
var room1 = new Room(); // this os a room with generic occupant type
var room2 = new Room(); // this os a room with generic occupant type
room1.addOccupant({ name: 'Tara', age: 24 }); //adding 1 occupant
room1.addOccupant({ name: 'Alam', age: 23 }); //adding another occupant
room2.addOccupant({ name: 'Aman', age: 21 }); //adding 1 occupant
room2.addOccupant({ name: 'Saif', age: 22 }); //adding 1 occupant
// console.log(`Occupants in Room 1 : ${room1.getOccupants()}`)
console.log(room1.getOccupants());
console.log(room2.getOccupants());
