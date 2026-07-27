function roman_to_integer(string) {
    const romans = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000};
    let result = [];
    for (let letter of string) {
        if (letter in romans) {
            if (result.length == 0) {
                result.push(romans[letter]);
            } else {
                if (result[result.length - 1] >= romans[letter]) {
                    result.push(romans[letter]);
                } else {
                    result.push(romans[letter] - result[result.length - 1]);
                    result[result.length - 2] = 0;
                }
            }
        }
    }
    const total = result.reduce((acc,val) => acc + val, 0);
    return total;
}

const string = "MCMXCIV";
console.log(roman_to_integer(string));