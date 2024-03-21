//interface -- only stores the properties / method data types -- not for initialization
//class wants to use interface --> implements keyword
var Laptop = /** @class */ (function () {
    function Laptop(name, price, screenSize) {
        this.name = name;
        this.price = price;
        this.screenSize = screenSize;
    }
    Laptop.prototype.getDescription = function () {
        return "Laptop : ".concat(this.name, ",\n        Price : ").concat(this.price, ",\n        ScreenSize : ").concat(this.screenSize);
    };
    return Laptop;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    Smartphone.prototype.getDescription = function () {
        return "Smartphone : ".concat(this.name, ",\n             Price : ").concat(this.price, ",\n             Brand : ").concat(this.brand);
    };
    return Smartphone;
}());
var laptop = new Laptop('Dell', 44444, 20.9);
var smartphone = new Smartphone('Oneplus 9rt', 23333, 'IN');
console.log(laptop);
console.log(smartphone);
console.log(laptop.getDescription());
console.log(smartphone.getDescription());
