const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz123456789";

    // Remove case and non-alphanumeric characters from str
    cleanStr = str
                .toLowerCase()
                .split("")
                .filter(char => alphanumerical.includes(char))
                .join("");
    
    // Create reversed copy of cleanStr
    reversedCleanStr = cleanStr
                        .split("")
                        .reverse()
                        .join("");
                        
    return cleanStr === reversedCleanStr;
};

// Do not edit below this line
module.exports = palindromes;
