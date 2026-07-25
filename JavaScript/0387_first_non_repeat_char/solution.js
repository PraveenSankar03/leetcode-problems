function first_non_repeat(string) {
    let char_count = {};
    for (let char of string) {
        if (char in char_count) {
            char_count[char] ++;
        } else {
            char_count[char] = 1;
        }
    }
    for (let char of string) {
        if (char_count[char] == 1) {
            return char;
        }
    }
    return -1;
}

const string = 'abcda';
console.log(first_non_repeat(string))