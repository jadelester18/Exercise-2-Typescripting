"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidinputVal = void 0;
const form = document.querySelector("form");
const input = document.querySelector("input");
const isValidinputVal = (inputVal) => {
    if (inputVal.length !== 10) {
        return false;
    }
    const regexVal = /^\d{9}$/;
    if (!regexVal.test(inputVal.slice(0, 9))) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const character = inputVal[i];
        let digit;
        if (character === "X" || character === "x") {
            digit = 10;
        }
        else {
            if (character < "0" || character > "9") {
                return false;
            }
            digit = Number(character);
        }
        sum += (i + 1) * digit;
    }
    return sum % 11 === 0;
};
exports.isValidinputVal = isValidinputVal;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputVal = input.value;
    if ((0, exports.isValidinputVal)(inputVal)) {
        console.log(inputVal + " -> True");
    }
    else {
        console.log(inputVal + " -> False");
    }
});
console.log((0, exports.isValidinputVal)("1112223339"));
console.log((0, exports.isValidinputVal)("111222333"));
console.log((0, exports.isValidinputVal)("1112223339X"));
console.log((0, exports.isValidinputVal)("1234554321"));
console.log((0, exports.isValidinputVal)("1234512345"));
console.log((0, exports.isValidinputVal)("048665088X"));
console.log((0, exports.isValidinputVal)("X123456788"));
