const sumAll = function(num1, num2) {
    // Returns error for non-integer numbers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    // Returns error for negative numbers
    if (num1 < 0 || num2 < 0) return "ERROR";

    // Swap numbers if first number is larger
    if (num1 > num2) [num1, num2] = [num2, num1];

    let total = 0;

    // Sum all numbers from num1 to num2
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    
    return total;

};

// Do not edit below this line
module.exports = sumAll;
