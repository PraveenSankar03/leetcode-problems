function replace_digits_with_characters(string) {
    let result = new String();
    for (let index = 0; index < string.length; index ++) {
        if (0 <= string[index] && string[index] <= 9) {
            let current = string[index - 1];
            result = result + String.fromCodePoint(current.codePointAt(0) + Number(string[index]));
        } else {
            result = result + string[index];
        }
    }
    return result;
};

const string = "a1b2c3d4e";
console.log(replace_digits_with_characters(string));