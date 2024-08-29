/*
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
*/


const fibonacci = function(num) {
    if (+num === 0) return 0;
    if (+num < 0) return "OOPS";
    
    // Base case: if num is 1 or 2, return 1
    if (+num === 1 || +num === 2) return 1;

    // Recursive case: if num greater than 2, return the sum of the preceding 2 fibs
    return fibonacci(+num - 1) + fibonacci(+num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
