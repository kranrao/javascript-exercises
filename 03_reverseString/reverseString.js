const reverseString = function(string) {
    
    // Primitive solution
    // let string = "";

    // for (let i = (words.length - 1); i >= 0; i--) {
    //     string += words[i];
    // }
    
    // return string;

    // Abstracted solution
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
