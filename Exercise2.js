function returnPosition(value,array) {
    for (let i = 0; i < array.length; i++) {
        if (value == array[i]) {
            return i;
        }
    }
    return -1;
};

let myArray = [12,4,5,7,15,-9,3,6,-8];
let number = -9;
let position = returnPosition(number,myArray);

if (position == -1) {
    console.log("No number found.");
} else {
    console.log("Your number is at position " + position + "of the array");
};