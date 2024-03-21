//function that swaps the position if two elements in an array using generics
//[1,2,3,4] , 0-2 => [3,2,1,4]
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Invalid indices');
    }
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
var numArr = [1, 2, 3, 4];
swap(numArr, 0, 2);
console.log(numArr);
var admin = {
    name: 'Alam',
    age: 24
};
console.log(admin);
var amount = 123222;
var data;
console.log(amount);
function filter(arr, filterF) {
    return arr.filter(filterF);
}
var numbers = [23, 12, 133, 15, 44];
var evenNum = filter(numbers, function (item) { return item % 2 == 0; });
console.log(evenNum);
// mapping,reduce
