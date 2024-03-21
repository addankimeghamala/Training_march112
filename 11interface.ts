//interface -- only stores the properties / method data types -- not for initialization
 
interface Product{
    name:string;
    price:number;
    getDescription():string;
}
 
//class wants to use interface --> implements keyword
 
class Laptop implements Product{
        // properties
        name : string;
        price: number;
        screenSize:number;
 
        constructor(name:string, price:number,screenSize:number){
            this.name=name;
            this.price=price;
            this.screenSize=screenSize;
        }
 
    getDescription(): string {
        return `Laptop : ${this.name},
        Price : ${this.price},
        ScreenSize : ${this.screenSize}`  
    }
}
class Smartphone implements Product{
     // properties
     name : string;
     price: number;
     brand:string;
 
     constructor(name:string, price:number,brand:string){
         this.name=name;
         this.price=price;
         this.brand=brand;
     }
 
 getDescription(): string {
     return `Smartphone : ${this.name},
             Price : ${this.price},
             Brand : ${this.brand}`  
 }
}
 
let laptop = new Laptop('Dell',44444,20.9);
let smartphone=new Smartphone('Oneplus 9rt',23333,'IN');
 
console.log(laptop);
console.log(smartphone);
 
console.log(laptop.getDescription());
console.log(smartphone.getDescription());
