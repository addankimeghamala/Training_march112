// define an abstract class
abstract class Shape {
    abstract calculateArea():number;//abstract method
}
 
//create derived class that extend abstract class
 
class Circle extends Shape{
    radius:number;
 
    constructor(radius:number){
        super();
        this.radius=radius;
    }
    // implementing abstract method
    calculateArea(): number {
        return Math.PI*this.radius**2;
    }
}
 
class Rectangle extends Shape{
    width:number;
    height:number;
 
    constructor(width:number,height:number){
        super();
        this.width=width;
        this.height=height;
    }
    calculateArea(): number {
        return this.width*this.height;
    }
}
 
let circle=new Circle(10);
let rectangle=new Rectangle(3,4);
 
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
